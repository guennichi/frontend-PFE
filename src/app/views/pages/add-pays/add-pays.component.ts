import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListPaysService } from '../Services/list-pays.service';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.scss']
})
export class AddPaysComponent implements OnInit {
  pays!: FormGroup; // Modèle pour les données du pays
  submitted = false;

  constructor(
    private paysService: ListPaysService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.pays = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      langue: new FormControl('', [Validators.required]),
      continent: new FormControl('', [Validators.required]),
      couleur_drapeau: new FormControl('', [Validators.required]),
      Religion: new FormControl('', [Validators.required]),
      populisation: new FormControl('', [Validators.required]),
      taux_de_migration: new FormControl('', [Validators.required]),
      // Locales: new FormControl('', [Validators.required]),
    });
  }
  ajouterPays() {
    this.submitted = true;
    if (this.pays.invalid) {
      console.log(this.pays.value);

      return;
    }
    this.paysService.ajouterPays(this.pays.value).subscribe(
      (response: any) => {
        this.router.navigateByUrl('/pages/pays/ListPays');
        this.toast.success(response.message);
        // Le pays a été ajouté avec succès, effectuez les actions nécessaires (redirection, message de succès, etc.)
      },
      (error: any) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      }
    );
  }
}
