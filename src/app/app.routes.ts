import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hotel-search', pathMatch: 'full' },
  { path: 'hotel-search', component: HotelSearchComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
