import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusiciensComponent } from './musiciens/musiciens.component';
import { AddMusicienComponent } from './add-musicien/add-musicien.component';
import { UpdateMusicienComponent } from './update-musicien/update-musicien.component';
import { RechercheParBandComponent } from './recherche-par-band/recherche-par-band.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path: "musiciens", component: MusiciensComponent},
  {path: "add-musicien", component: AddMusicienComponent},
  {path: "", redirectTo: "musiciens", pathMatch: "full" },
  {path: "updateMusicien/:id", component: UpdateMusicienComponent},
  {path: "rechercheParBand", component : RechercheParBandComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
