import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-local',
  templateUrl: './add-local.component.html',
  styleUrls: ['./add-local.component.scss']
})
export class AddLocalComponent {
  addLocalForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addLocalForm = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Adresse: new FormControl('', [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Responsables: new FormControl('', [Validators.required]),
    });
  }
   
  soumettreFormulaire() {
    if (this.addLocalForm.valid) {
      const valeurs = this.addLocalForm.value;
      // Utilisez les valeurs du formulaire pour le traitement
      console.log(valeurs);
    }
  }
}
