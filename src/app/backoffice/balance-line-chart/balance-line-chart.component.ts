import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-balance-line-chart',
  templateUrl: './balance-line-chart.component.html',
  standalone: true,
  imports: [CommonModule, ChartModule],
  styleUrls: ['./balance-line-chart.component.scss'],
})
export class BalanceLineChartComponent implements OnInit {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
      },
      /* {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#FFA726',
        tension: 0.4,
      }, */
    ],
  };

  options = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
      y: {
        ticks: {
          color: '#ebedef',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
    },
  };
  ngOnInit(): void {}
}
