import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StatesComponent } from './page/states/states.component';
import { ContactComponent } from './page/contact/contact.component';
import { SingleStatePageComponent } from './page/single-state-page/single-state-page.component';


export const routes: Routes = [
    
    {
        path:"states",component:StatesComponent
    },
    {
        path:"contact",component:ContactComponent
    },
    {
        path:"states/:id",component:SingleStatePageComponent
    },
    {
        path:"",component:HomeComponent
    },
];
