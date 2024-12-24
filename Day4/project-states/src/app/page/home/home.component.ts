import { Component} from '@angular/core';
import { NavComponent } from '../../ui/nav/nav.component';
import { GalleryComponent } from '../../ui/gallery/gallery.component';
import { ContentComponent } from '../../ui/content/content.component';
import { identifierName } from '@angular/compiler';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavComponent,CarouselModule,ContentComponent,NgFor,GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
    slide=[
      {
        id:"1",
        name:"Kanthallor",
        discription:"Kaashmir of Kerala",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kanthalloor_landscape_01.JPG/1280px-Kanthalloor_landscape_01.JPG",
      },
      {
        id:"2",
        name:"Sarmoli",
        discription:"The enchanting Himalayan haven",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Munsiari_IMG_20160617_132452119_%2832987221606%29.jpg/1280px-Munsiari_IMG_20160617_132452119_%2832987221606%29.jpg",
      },
      {
        id:"3",
        name:"Reiek",
        discription:"The home of majestic misty mountain",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Reiek.JPG/1280px-Reiek.JPG",
      },

    ]
}
