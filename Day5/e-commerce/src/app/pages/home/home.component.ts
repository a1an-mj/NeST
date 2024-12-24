import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../ui/nav/nav.component';
import { CardComponent } from '../../ui/card/card.component';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  imports: [NavComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService){
  }
  value:any;
  ngOnInit(){
    this.api.getProducts().subscribe((res:any)=>{
      this.value=res.products;
      console.log(this.value);
    })
  }

}
