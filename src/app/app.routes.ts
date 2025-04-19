import { Routes } from '@angular/router';
import { ScreeningComponent } from './pages/screening/screening.component';
import { Screening2Component } from './pages/screening2/screening2.component';
import { SectorsIndustriesComponent } from './pages/sectors-industries/sectors-industries.component';

export const routes: Routes = [
  {
    path: '', component: ScreeningComponent
  },
  {
    path: 'screening2', component: Screening2Component
  },
  {
    path: 'sectors-industries', component: SectorsIndustriesComponent
  }
];
