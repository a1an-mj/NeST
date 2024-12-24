import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
  ngOnInit(): void {
    initFlowbite();
  }
}
