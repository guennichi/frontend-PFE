import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.scss']
})
export class AddPaysComponent {
  addPaysForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addPaysForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      langue: new FormControl('', [Validators.required]),
      continent: new FormControl('', [Validators.required]),
      couleur_drapeau: new FormControl('', [Validators.required]),
      Réligion: new FormControl('', [Validators.required]),
      popilisation: new FormControl('', [Validators.required, Validators.email]),
      taux_de_migration: new FormControl('', [Validators.required]),
      Locales: new FormControl('', [Validators.required]),
    });
  }
  soumettreFormulaire() {
    if (this.addPaysForm.valid) {
      const valeurs = this.addPaysForm.value;
      // Utilisez les valeurs du formulaire pour le traitement
      console.log(valeurs);
    }
  }
}
