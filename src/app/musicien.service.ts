import { Injectable } from '@angular/core';
import { Musicien } from './model/musicien.model';
import { MusiciensComponent } from './musiciens/musiciens.component';
import { Band } from './model/band.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BandWrapper } from './model/bandWrapper.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class MusicienService {

  apiURL: string = 'http://localhost:8080/musiciens/api';
  apiURLBand: string = 'http://localhost:8080/musiciens/band';

  musiciens : Musicien[];
  musicien!: Musicien;
  bands : Band[];
  constructor(private http : HttpClient) {
    this.bands = [
      {idBand: 1, nomBand:"Pink Floyd"},
      {idBand: 2, nomBand:"Nirvana"}
    ]
    this.musiciens = [
      {idMusicien: 1, nomMusicien:"Louay Ouali",anneeExp:4,instrument:"Guitare electrique",salaire:1600, band : {idBand:1, nomBand:"Pink Floyd"}},
      {idMusicien: 3, nomMusicien:"Mariem",anneeExp:4,instrument:"Piano",salaire:1200, band : {idBand:1, nomBand:"Pink Floyd"}},
      {idMusicien: 4, nomMusicien:"Ramzi",anneeExp:3,instrument:"Bongo",salaire:700, band : {idBand:2, nomBand:"Nirvana"}},
  ];
   }

  listeBands(): Observable<BandWrapper> {
    return this.http.get<BandWrapper>(this.apiURLBand);
  }

  consulterBand(id:number): Band {
    return this.bands.find(band => band.idBand == id)!;
  }

  listeMusiciens(): Observable<Musicien[]> {
  return this.http.get<Musicien[]>(this.apiURL);
  }

  ajouterMusicien(mus : Musicien): Observable<Musicien> {
  return this.http.post<Musicien>(this.apiURL, mus, httpOptions);
  }

  supprimerMusicien(id : number) {
  const url= `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }

  consulterMusicien(id: number): Observable<Musicien> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Musicien>(url);
  }

  updateMusicien(m : Musicien) : Observable<Musicien> {
    // this.supprimerMusicien(m.idMusicien!);
    // this.ajouterMusicien(m);
    // this.trierMusicien();
    return this.http.put<Musicien>(this.apiURL,m,httpOptions);
  }

  trierMusicien() {
    this.musiciens = this.musiciens.sort((n1,n2) => {
      if(n1.idMusicien! > n2.idMusicien!) {
        return 1;
      }
      if(n1.idMusicien! < n2.idMusicien!) {
        return -1;
      }
      return 0;

    });
  }

  rechercherParBand(idBand: number): Observable<Musicien[]> {
    const url = `${this.apiURL}/bands/${idBand}`;
    return this.http.get<Musicien[]>(url);
  }

  rechercheParNom(nom: string): Observable<Musicien[]> {
    const url = `${this.apiURL}/musByName/${nom}`;
    return this.http.get<Musicien[]>(url);
  }


}
