import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app/app.component';
import { ComparativeDashboardComponent } from '../components/comparative-dashboard/comparative-dashboard.component';
import { TestDashboardComponent } from '../components/test-dashboard/test-dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TestDashboardComponent
  },
  {
    path: 'comparative',
    component: ComparativeDashboardComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
