import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SuperviseurService } from '../list-superviseur/superviseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  superviseur!: FormGroup; // Modèle pour les données du superviseur


  constructor(private superviseurService: SuperviseurService, private router: Router) { }

  ngOnInit(): void {
    this.superviseur = new FormGroup({
      Nom: new FormControl("", [Validators.required]),
      Prenom: new FormControl("", [Validators.required]),
      Date_Naissence: new FormControl("", [Validators.required]),
      Lieu: new FormControl("", [Validators.required]),
      Pays: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),
      Role: new FormControl("", [Validators.required]),
    })
  }

  ajouterSuperviseur(): void {
    this.superviseurService.ajouterSuperviseur(this.superviseur.value)
      .subscribe(
        response => {
          this.router.navigateByUrl("/pages/superviseur/ListSuperviseur")
          // Le superviseur a été ajouté avec succès, effectuez les actions nécessaires (redirection, message de succès, etc.)
        },
        error => {
          console.log(error);

          // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
        }
      );
  }





}
