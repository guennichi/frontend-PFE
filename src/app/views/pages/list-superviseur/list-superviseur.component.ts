import { Component, ViewChild } from '@angular/core';
import { SuperviseurService } from '../Services/superviseur.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-superviseur',
  templateUrl: './list-superviseur.component.html',
  styleUrls: ['./list-superviseur.component.scss'],
})
export class ListSuperviseurComponent {
  listSuperviseur: any[] = [];
  superviseurs!: FormGroup; // Supposons que votre liste de superviseurs est stockée dans cette variable
  idSup: any;
  constructor(
    private superviseurService: SuperviseurService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.superviseurs = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Prenom: new FormControl('', [Validators.required]),
      Date_Naissence: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
    });
    this.getSuperviseurs();
  }

  getSuperviseurs(): void {
    this.superviseurService.getAllUsers().subscribe(
      (response: any) => {
        this.listSuperviseur = response.user;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteSuperviseur(superviseurId: number): void {
    this.superviseurService.deleteUser(superviseurId).subscribe(
      (response: any) => {
        this.toast.success(response.message);
        this.ngOnInit(); // Met à jour la liste après la suppression
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }

  showData(id: any) {
    this.idSup = id;
    this.superviseurService.getOne(id).subscribe(
      (response: any) => {
        this.superviseurs.patchValue(response);
        this.toast.info('Data recuperé');
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
  updateSuperviseur() {
    this.superviseurService
      .updateUser(this.idSup, this.superviseurs.value)
      .subscribe(
        (response: any) => {
          window.location.reload();
        },
        (error) => {
          this.toast.error(error.message);
        }
      );
  }
}
