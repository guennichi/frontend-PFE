import { Component, OnInit } from '@angular/core';
import { FileService } from '../Services/file.service';
import { MigrationService } from '../Services/migration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {

  uploadedFiles!: any[];
  file: any;

  constructor(private migrationService: MigrationService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {

  }

  selectfile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.file = file
      console.log(file);

    }
  }
  onsubmit() {
    if (this.file) {
      let formData = new FormData();
      formData.append('fichier', this.file, this.file.name)
      this.migrationService.addMigrationFile(formData).subscribe((response) => {
        this.toastr.success(response.message)
        this.router.navigateByUrl('/charts')
      }, error => {
        this.toastr.error(error.error.message)
      })
    } else {
      this.toastr.warning('Veuiller choisir un fichier !', 'Warning')
    }
  }
}
