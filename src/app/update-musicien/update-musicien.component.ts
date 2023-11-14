import { Component } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { MusicienService } from '../musicien.service';
import { Musicien } from '../model/musicien.model';
import { Band } from '../model/band.model';

@Component({
  selector: 'app-update-musicien',
  templateUrl: './update-musicien.component.html',
  styleUrls: ['./update-musicien.component.css']
})
export class UpdateMusicienComponent {
  currentMusicien = new Musicien();

  bands! : Band[];
  updatedBandId! : number;

  constructor(private activatedRoute: ActivatedRoute, private musicienService: MusicienService, private router: Router) {}

  ngOnInit(): void {
    this.musicienService.listeBands().subscribe(bands => {
      this.bands = bands._embedded.bands;
      console.log(bands);
    });
    this.musicienService.consulterMusicien(this.activatedRoute.snapshot.params['id']).subscribe(mus => {
      this.currentMusicien = mus;
      this.updatedBandId = this.currentMusicien.band.idBand;
    })
  }

  updateMusicien() {
    // this.musicienService.updateMusicien(this.currentMusicien).subscribe(mus => {
    //   this.router.navigate(['musiciens']);
    // })

    this.currentMusicien.band = this.bands.find(band => band.idBand == this.updatedBandId)!;
    this.musicienService.updateMusicien(this.currentMusicien).subscribe(mus => {
      this.router.navigate(['musiciens']);
    })
  }
}
