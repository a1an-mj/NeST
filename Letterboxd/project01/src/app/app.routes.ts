import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleMovieComponent } from './pages/single-movie/single-movie.component';
import { TopComponent } from './pages/top/top.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'product/:id', component:SingleMovieComponent
    },
    {
        path:'top', component:TopComponent
    },
    {
        path:'about', component:AboutComponent
    }
];
