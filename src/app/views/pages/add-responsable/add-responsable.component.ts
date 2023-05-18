import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.scss']
})
export class AddResponsableComponent {
  addRespForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addRespForm = new FormGroup({
    Nom: new FormControl('', [Validators.required]),
    Prenom: new FormControl('', [Validators.required]),
    EmailRespo: new FormControl('', [Validators.required, Validators.email]),
    num_passport: new FormControl('', [Validators.required]),
    date_affectation: new FormControl('', [Validators.required]),
    Pays: new FormControl('', [Validators.required]),
    Locale: new FormControl('', [Validators.required]),
    });
  }
  soumettreFormulaire() {
    if (this.addRespForm.valid) {
      const valeurs = this.addRespForm.value;
      // Utilisez les valeurs du formulaire pour le traitement
      console.log(valeurs);
    }
  }

}