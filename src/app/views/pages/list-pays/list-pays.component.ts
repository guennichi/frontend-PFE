import { Component } from '@angular/core';
import {  ListPaysService } from '../list-pays/list-pays.service';

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.scss']
})
export class ListPaysComponent {
  pays!: any[]; // Supposons que votre liste de pays est stockée dans cette variable

  constructor(private paysService: ListPaysService) { }


  ngOnInit(): void {
    this.getPays();
  }

  getPays(): void {
    this.paysService.getAllPays().subscribe((response: any) => {
      console.log(response);
      
      this.pays = response.user;
    }
    ,(error:any)=>{ 
      console.log(error)
    })
  }

  deletePays(paysId: number): void {
    this.paysService.deletePays(paysId).subscribe(() => {
      this.getPays(); // Met à jour la liste après la suppression
    });
  }

  updatePays(paysId: number, paysData: any): void {
    this.paysService.updatePays(paysId, paysData).subscribe(() => {
      this.getPays(); // Met à jour la liste après la mise à jour
    });
  }

}
