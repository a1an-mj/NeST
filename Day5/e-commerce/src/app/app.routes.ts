import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'product/:id', component:SingleProductComponent
    },
    
];
