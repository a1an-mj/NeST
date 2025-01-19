import { Component } from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../ui/card/card.component';
import { InfoComponent } from '../../ui/info/info.component';

@Component({
  selector: 'app-single-movie',
  imports: [NavComponent,InfoComponent],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss'
})
export class SingleMovieComponent {
  constructor(private activate:ActivatedRoute,private api:ApiService){}
  product: any;
  value:any;
  m:any;
  ngOnInit(): void{
    let id = this.activate.snapshot.paramMap.get("id")
    console.log(id)
    this.m=id;
    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
    });
    this.api.getProducts().subscribe((res:any)=>{
      this.value=res.products;
      console.log(this.value);
    });



    
  }
  
}
