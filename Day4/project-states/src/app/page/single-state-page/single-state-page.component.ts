import { Component } from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single-state-page',
  imports: [NavComponent],
  templateUrl: './single-state-page.component.html',
  styleUrl: './single-state-page.component.scss'
})
export class SingleStatePageComponent {

  data:any;

  constructor(private activated:ActivatedRoute,public api:ApiService){
    
  }
  ngOnInit(){
    //get id from url
    let id=this.activated.snapshot.paramMap.get('id');
    //calling function
    this.data=this.api.getStatesById(id);
  }

  

}
