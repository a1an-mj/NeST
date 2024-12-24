import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { NavComponent } from '../../ui/nav/nav.component';

@Component({
  selector: 'app-single-product',
  imports: [NavComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  constructor(private activate:ActivatedRoute,private api:ApiService) { }
  product: any;
  ngOnInit(): void {
    let id = this.activate.snapshot.paramMap.get("id");

    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
      

    });
  }

}
