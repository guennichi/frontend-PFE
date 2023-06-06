import { Component, OnInit } from '@angular/core';
import { FileService } from '../Services/file.service';
import { MigrationService } from '../Services/migration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { DashboardChartsData, IChartProps } from '../../dashboard/dashboard-charts-data';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: string;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {

  constructor(private chartsData: DashboardChartsData) {
  }

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: '3k',
      usage: 'Classeur Migration1',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: '2.5k',
      usage: 'Classeur Migration 2',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: '4k',
      usage: 'Classeur Migration 3',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: '2k',
      usage: 'Classeur Migration 4',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: '6k',
      usage: 'Classeur Migration 5',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: '3k',
      usage: 'Classeur Migration 6',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '02/05/2023',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
