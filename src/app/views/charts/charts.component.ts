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
  list: any
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
      this.total = result.data.slice(-1)
      if (this.MigrationData) {
        for (let i = 0; i < this.MigrationData.length - 1; i++) {
          this.Nationality.push(this.MigrationData[i].Nationality)
          this.NumberOfMigrants.push(Number(this.MigrationData[i].NumberOfMigrants))
          this.Migrants.push(this.MigrationData[i].Migrants * 100)
        }
        this.list = {
          labels: this.Nationality.slice(0, 10),
          datasets: [
            {
              label: 'Number of Migrants',
              backgroundColor: '#f87979',
              data: this.NumberOfMigrants.slice(0, 10)
            }
          ]
        };

      }

    }, (error: any) => {
      console.log(error);

    });

    this.renderChartPie()
  }
  renderChartbar() {
    this.list = {
      labels: this.Nationality.slice(0, 10),
      datasets: [
        {
          label: 'Number of Migrants',
          backgroundColor: '#f87979',
          data: this.NumberOfMigrants.slice(0, 10)
        }
      ]
    };
  }

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

  chartLineData = {
    labels: [].slice(0, 7),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: []
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: []
      }
    ]
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartDoughnutData = {
    labels: this.Nationality.slice(0, 4),
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: this.Migrants.slice(0, 4)
      }
    ]
  };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };
  renderChartPie() {
    this.chartPieData = {
      labels: this.Nationality.slice(0, 3),
      datasets: [
        {
          data: this.Migrants.slice(0, 3),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
  }
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
