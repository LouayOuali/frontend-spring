import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusiciensComponent } from './musiciens/musiciens.component';
import { AddMusicienComponent } from './add-musicien/add-musicien.component';
import { UpdateMusicienComponent } from './update-musicien/update-musicien.component';

import { HttpClientModule } from '@angular/common/http';
import { RechercheParBandComponent } from './recherche-par-band/recherche-par-band.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MusiciensComponent,
    AddMusicienComponent,
    UpdateMusicienComponent,
    RechercheParBandComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
