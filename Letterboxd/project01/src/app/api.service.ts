import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProducts(){
    let data =this.http.get('https://a1an-mj.github.io/moviedummy/movie.json');
    return data;
  }
  getProductsById(id:any){

    return this.http.get(`https://a1an-mj.github.io/moviedummy/movie.json/${id}`);
    
    }
}
