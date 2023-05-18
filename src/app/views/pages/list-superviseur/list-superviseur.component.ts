import { Component } from '@angular/core';
import { SuperviseurService } from './superviseur.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-superviseur',
  templateUrl: './list-superviseur.component.html',
  styleUrls: ['./list-superviseur.component.scss']
})
export class ListSuperviseurComponent {
  listSuperviseur: any[] = []
  superviseurs!: FormGroup; // Supposons que votre liste de superviseurs est stockée dans cette variable
  idSup: any
  constructor(private superviseurService: SuperviseurService) { }

  ngOnInit(): void {
    this.superviseurs = new FormGroup({
      Nom: new FormControl("", [Validators.required]),
      Prenom: new FormControl("", [Validators.required]),
      Date_Naissence: new FormControl("", [Validators.required]),
      Lieu: new FormControl("", [Validators.required]),
      Pays: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),
      Role: new FormControl("", [Validators.required]),
    })
    this.getSuperviseurs();
  }

  getSuperviseurs(): void {
    this.superviseurService.getAllSuperviseurs().subscribe((response: any) => {
      this.listSuperviseur = response.user;
    }
      , (error: any) => {
        console.log(error)
      })
  }

  deleteSuperviseur(superviseurId: number): void {
    this.superviseurService.deleteSuperviseur(superviseurId).subscribe(() => {
      this.ngOnInit(); // Met à jour la liste après la suppression
    });
  }


  showData(id: any) {
    this.idSup = id
    this.superviseurService.getOne(id).subscribe((response: any) => {
      console.log(response.user);

      this.superviseurs.patchValue(response.user);
    }
      , (error: any) => {
        console.log(error)
      })
  }
  updateSuperviseur() {
    this.superviseurService.updateSuperviseur(this.idSup, this.superviseurs.value).subscribe(() => {
      this.getSuperviseurs(); // Met à jour la liste après la mise à jour
    });
  }

}