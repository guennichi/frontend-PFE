import { Component } from '@angular/core';
import { ListPaysService } from '../list-pays/list-pays.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.scss']
})
export class ListPaysComponent {
  listPays: any[] = []
  pays!: FormGroup; // Supposons que votre liste de payss est stockée dans cette variable
  idSup: any  // Supposons que votre liste de pays est stockée dans cette variable

  constructor(private paysService: ListPaysService) { }


  ngOnInit(): void {
    this.pays = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      langue: new FormControl('', [Validators.required]),
      continent: new FormControl('', [Validators.required]),
      couleur_drapeau: new FormControl('', [Validators.required]),
      Réligion: new FormControl('', [Validators.required]),
      popilisation: new FormControl('', [Validators.required, Validators.email]),
      taux_de_migration: new FormControl('', [Validators.required]),
      Locales: new FormControl('', [Validators.required]),
    })
    this.getPays();
  }

  getPays(): void {
    this.paysService.getAllPays().subscribe((response: any) => {
      console.log(response);

      this.pays = response.user;
    }
      , (error: any) => {
        console.log(error)
      })
  }

  deletePays(paysId: number): void {
    this.paysService.deletePays(paysId).subscribe(() => {
      this.getPays(); // Met à jour la liste après la suppression
    });
  }
  showData(id: any) {
    this.idSup = id
    this.paysService.getOne(id).subscribe((response: any) => {
      console.log(response.user);

      this.pays.patchValue(response.user);
    }
      , (error: any) => {
        console.log(error)
      })
  }

  updatePays() {
    this.paysService.updatePays(this.idSup, this.pays.value).subscribe(() => {
      this.getPays(); // Met à jour la liste après la mise à jour
    });
  }

}
