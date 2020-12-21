import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesService } from './cities.service';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule
  ],
  providers: [CitiesService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
