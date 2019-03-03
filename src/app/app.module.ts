import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './x-services/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardItemComponent }   from './dashboard/dashboard-item';
import { HeroComponent }  from './hero/hero.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { ListItemComponent }      from './heroes/list-item';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroLogComponent }  from './hero-log/hero-log.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardItemComponent,
    HeroesComponent,
    ListItemComponent,
    HeroComponent,
    HeroSearchComponent,
    HeroLogComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }