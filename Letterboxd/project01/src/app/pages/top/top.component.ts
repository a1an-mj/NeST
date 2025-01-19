import { Component } from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { ApiService } from '../../api.service';
import { SlidesComponent } from '../../ui/slides/slides.component';

@Component({
  selector: 'app-top',
  imports: [NavComponent,SlidesComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
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
