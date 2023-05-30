import { Component } from '@angular/core';
import { ListPaysService } from '../Services/list-pays.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.scss'],
})
export class ListPaysComponent {
  listPays: any[] = [];
  pays!: FormGroup; // Supposons que votre liste de payss est stockée dans cette variable
  idPay: any; // Supposons que votre liste de pays est stockée dans cette variable

  constructor(private paysService: ListPaysService, private toast: ToastrService) { }

  ngOnInit(): void {
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

    this.getPays();

  }

  getPays(): void {
    this.paysService.getAllPays().subscribe(
      (response: any) => {
        console.log(response);

        this.listPays = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  deletePays(paysId: number): void {
    this.paysService.deletePays(paysId).subscribe(
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
    this.idPay = id;
    this.paysService.getOne(id).subscribe(
      (response: any) => {
        this.pays.patchValue(response);
        this.toast.info('Data recuperé');
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
  updatePays() {
    this.paysService
      .updatePays(this.idPay, this.pays.value)
      .subscribe(
        (response: any) => {
          window.location.reload();
        },
        (error: any) => {
          this.toast.error(error.message);
        }
      );
  }
}
