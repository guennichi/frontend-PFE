import { Component } from '@angular/core';
import { LocalService } from '../Services/local.service';
@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss'],
})
export class ListLocalComponent {
  locales!: any[]; // Supposons que votre liste de locales est stockée dans cette variable

  constructor(private localeService: LocalService) {}

  ngOnInit(): void {
    this.getLocales();
  }

  getLocales(): void {
    this.localeService.getAllLocals().subscribe(
      (response: any) => {
        console.log(response);

        this.locales = response.user;
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

  updateLocale(localeId: number, localeData: any): void {
    this.localeService.updateLocal(localeId, localeData).subscribe(() => {
      this.getLocales(); // Met à jour la liste après la mise à jour
    });
  }
}
