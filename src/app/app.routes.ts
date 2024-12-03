import { Routes } from '@angular/router';
import { HomepageComponent } from './features/main/pages/homepage/homepage.component';
import { ProductpageComponent } from './features/main/pages/productpage/productpage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'product',
        component: ProductpageComponent
    }
];
