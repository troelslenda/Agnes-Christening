import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
//import { routing }        from './app.router';

import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ParticipateComponent } from './participate/participate.component';
import { PhotosComponent } from './photos/photos.component';
import { WishesComponent } from './wishes/wishes.component';

@NgModule({
  imports: [
    BrowserModule,
    //routing,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    InfoComponent,
    MenuComponent,
    CalendarComponent,
    ParticipateComponent,
    PhotosComponent,
    WishesComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
