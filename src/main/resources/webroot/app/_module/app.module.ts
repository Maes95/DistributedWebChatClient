import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/animations';

import { ChartsModule } from 'ng2-charts';

import { AppComponent }  from '../app/app.component';

import { ComparativeDashboardComponent } from '../components/comparative-dashboard/comparative-dashboard.component';
import { TestDashboardComponent } from '../components/test-dashboard/test-dashboard.component';

import { KeysPipe } from '../pipes/keys.pipe';

import { routing }        from '../_routing/app.routing';

import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    routing,
    FormsModule,
    ChartsModule,
    NgxChartsModule
  ],
  declarations: [
    AppComponent,
    ComparativeDashboardComponent,
    TestDashboardComponent,
    KeysPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
