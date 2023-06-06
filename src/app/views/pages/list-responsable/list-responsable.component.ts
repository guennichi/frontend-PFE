import { Component } from '@angular/core';
import { ResponsableService } from '../Services/responsable.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListPaysService } from '../Services/list-pays.service';
import { LocalService } from '../Services/local.service';
@Component({
  selector: 'app-list-responsable',
  templateUrl: './list-responsable.component.html',
  styleUrls: ['./list-responsable.component.scss'],
})
export class ListResponsableComponent {
  listResponsable: any[] = [];
  responsables!: FormGroup; // Supposons que votre liste de superviseurs est stockée dans cette variable
  idResp: any;
  pays: any[] = []
  locale: any[] = []

  constructor(private responsableService: ResponsableService,
    private paysService: ListPaysService,
    private localeService: LocalService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.responsables = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Prenom: new FormControl('', [Validators.required]),
      EmailRespo: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      date_affectation: new FormControl('', [Validators.required]),
      Pays: new FormControl('', [Validators.required]),
      Locale: new FormControl('', [Validators.required]),
    });
    this.getResponsables();
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

  getResponsables(): void {
    this.responsableService.getAllResponsables().subscribe(
      (response: any) => {
        this.listResponsable = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteResponsable(responsableId: number): void {
    this.responsableService.deleteResponsable(responsableId).subscribe(() => {
      this.getResponsables(); // Met à jour la liste après la suppression
    });
  }
  showData(id: any) {
    this.idResp = id;
    this.responsableService.getOne(id).subscribe(
      (response: any) => {
        this.responsables.patchValue(response);
        this.toast.info('Data recuperé');
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
  updateResponsable() {
    this.responsableService
      .updateResponsable(this.idResp, this.responsables.value)
      .subscribe(
        (response: any) => {
          window.location.reload();
        },
        (error) => {
          this.toast.error(error.message);
        }
      );
  }
  changeStatus(responsableId: number): void {
    this.responsableService.statusChange(responsableId).subscribe(
      (response: any) => {
        // this.toast.success(response.message);
        this.ngOnInit(); // Met à jour la liste après la suppression
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
}
