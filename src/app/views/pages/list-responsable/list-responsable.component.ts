import { Component } from '@angular/core';
import { ResponsableService } from './responsable.service';
@Component({
  selector: 'app-list-responsable',
  templateUrl: './list-responsable.component.html',
  styleUrls: ['./list-responsable.component.scss']
})
export class ListResponsableComponent {
  responsables!: any[]; // Supposons que votre liste de superviseurs est stockée dans cette variable

  constructor(private responsableService: ResponsableService) { }

  ngOnInit(): void {
    this.getResponsables();
  }

  getResponsables(): void {
    this.responsableService.getAllResponsables().subscribe((response: any) => {
      console.log(response);
      this.responsables = response;
    }
    ,(error:any)=>{ 
      console.log(error)

    });
  }

  deleteResponsable(responsableId: number): void {
    this.responsableService.deleteResponsable(responsableId).subscribe(() => {
      this.getResponsables(); // Met à jour la liste après la suppression
    });
  }

  updateResponsable(responsableId: number, responsableData: any): void {
    this.responsableService.updateResponsable(responsableId, responsableData).subscribe(() => {
      this.getResponsables(); // Met à jour la liste après la mise à jour
    });
  }
}
