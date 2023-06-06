import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ResponsableService } from '../Services/responsable.service';
import { Router } from '@angular/router';
import { ListPaysService } from '../Services/list-pays.service';
import { LocalService } from '../Services/local.service';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.scss']
})
export class AddResponsableComponent implements OnInit {
  responsable!: FormGroup; // Modèle pour les données du superviseur
  submitted = false;
  pays: any[] = []
  locale: any[] = []

  constructor(
    private responsableService: ResponsableService,
    private paysService: ListPaysService,
    private localeService: LocalService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.responsable = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Prenom: new FormControl('', [Validators.required]),
      EmailRespo: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      date_affectation: new FormControl(new Date(), [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Locale: new FormControl('', [Validators.required]),
    });
    this.paysService.getAllPays().subscribe((response: any) => {
      this.pays = response
    },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      })
    this.localeService.getAllLocals().subscribe((response: any) => {
      this.locale = response
    },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      })

  }
  ajouterResponsable(): void {
    this.submitted = true;
    if (this.responsable.invalid) {
      console.log(this.responsable.value);

      return;
    }
    this.responsableService.ajouterResponsable(this.responsable.value).subscribe(
      (response) => {
        this.router.navigateByUrl('/pages/responsable/listResponsable');
        this.toast.success(response.message);
        // Le superviseur a été ajouté avec succès, effectuez les actions nécessaires (redirection, message de succès, etc.)
      },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      }
    );
  }

}