import { Component, OnInit } from '@angular/core';

import { MigrationService } from '../pages/Services/migration.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']

})
export class ChartsComponent implements OnInit {
  MigrationData: any[] = []
  Nationality: any[] = []
  NumberOfMigrants: any[] = []
  Migrants: any[] = []
  listBar: any;
  chartLineData: any;
  chartPieData: any

  total: any
  constructor(private migrationService: MigrationService) {

  }
  ngOnInit(): void {
    this.renderListOfMigration()

  }
  renderListOfMigration() {
    this.migrationService.getAllMigrations().subscribe((result: any) => {
      this.MigrationData = result.data;
      if (this.MigrationData.length == 0) {

      } else {
        this.total = result.data.slice(-1)
        if (this.MigrationData) {
          for (let i = 0; i < this.MigrationData.length - 1; i++) {
            this.Nationality.push(this.MigrationData[i].Nationality)
            this.NumberOfMigrants.push(Number(this.MigrationData[i].NumberOfMigrants))
            this.Migrants.push(this.MigrationData[i].Migrants * 100)
          }
          this.listBar = {
            labels: this.Nationality.slice(0, 10),
            datasets: [
              {
                label: 'Number of Migrants',
                backgroundColor: '#f87979',
                data: this.NumberOfMigrants.slice(0, 10)
              }
            ]
          };
          this.chartLineData = {
            labels: this.Nationality.slice(0, 27),
            datasets: [
              {
                label: 'Taux de migration %',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: this.Migrants.slice(0, 27)
              }
            ]
          };
          this.chartPieData = {
            labels: this.Nationality.slice(0, 7),
            datasets: [
              {
                data: this.Migrants.slice(0, 7),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#41B883', '#E46651', '#00D8FF', '#DD1B16']
              }
            ]
          };

        }

      }
    }, (error: any) => {
      console.log(error);

    });
  }

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };



  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartDoughnutData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };



  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPolarAreaData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  chartRadarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: '2020',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        tooltipLabelColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: '2021',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        tooltipLabelColor: 'rgba(255,99,132,1)',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
