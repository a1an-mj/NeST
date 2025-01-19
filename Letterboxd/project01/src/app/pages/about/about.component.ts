import { Component } from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [NavComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
