import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../Services/local.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListPaysService } from '../Services/list-pays.service';
import { ResponsableService } from '../Services/responsable.service';

@Component({
  selector: 'app-add-local',
  templateUrl: './add-local.component.html',
  styleUrls: ['./add-local.component.scss']
})
export class AddLocalComponent implements OnInit {
  local!: FormGroup;
  submitted = false;
  pays: any[] = []
  responsable: any[] = []

  constructor(
    private localService: LocalService,
    private responsableService: ResponsableService,
    private paysService: ListPaysService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.local = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Adresse: new FormControl('', [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Responsables: new FormControl('', [Validators.required]),
    });
    this.paysService.getAllPays().subscribe((response: any) => {
      this.pays = response
    },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      })
    this.responsableService.getAllResponsables().subscribe((response: any) => {
      this.responsable = response
    },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      })
  }

  ajouterLocal(): void {
    this.submitted = true;
    if (this.local.invalid) {
      console.log(this.local.value);

      return;
    }
    this.localService.ajouterLocal(this.local.value).subscribe(
      (response: any) => {
        this.router.navigateByUrl('/pages/local/Listlocal');
        this.toast.success(response.message);
        // Le local a été ajouté avec succès, effectuez les actions nécessaires (redirection, message de succès, etc.)
      },
      (error) => {
        console.log(error);

        // Gérez les erreurs de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
      }
    );
  }
}
