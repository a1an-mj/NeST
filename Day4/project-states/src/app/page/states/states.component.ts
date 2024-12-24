import { Component } from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { CardsComponent } from '../../ui/cards/cards.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [NavComponent,CardsComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
    state:any;
  constructor(public api:ApiService){

  }
  ngOnInit(){
    this.state=this.api.getStates();
  }
}
