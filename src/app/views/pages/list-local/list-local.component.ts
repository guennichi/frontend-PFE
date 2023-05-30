import { Component } from '@angular/core';
import { LocalService } from '../Services/local.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponsableService } from '../Services/responsable.service';
import { ListPaysService } from '../Services/list-pays.service';
@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss'],
})
export class ListLocalComponent {

  Listlocales: any[] = []; // Supposons que votre liste de locales est stockée dans cette variable
  locales!: FormGroup;
  idLoc: any;
  responsable: any[] = []
  pays: any[] = []
  constructor(private localeService: LocalService,
    private paysService: ListPaysService,
    private responsableService: ResponsableService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.locales = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Adresse: new FormControl('', [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Responsables: new FormControl('', [Validators.required]),
    });
    this.getLocales();
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

  getLocales(): void {
    this.localeService.getAllLocals().subscribe(
      (response: any) => {
        console.log(response);

        this.Listlocales = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteLocale(localeId: number): void {
    this.localeService.deleteLocal(localeId).subscribe(() => {
      this.getLocales(); // Met à jour la liste après la suppression
    });
  }
  showData(id: any) {
    this.idLoc = id;
    this.localeService.getOne(id).subscribe(
      (response: any) => {
        this.locales.patchValue(response);
        this.toast.info('Data recuperé');
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
  updateLocal() {
    this.localeService
      .updateLocal(this.idLoc, this.locales.value)
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
