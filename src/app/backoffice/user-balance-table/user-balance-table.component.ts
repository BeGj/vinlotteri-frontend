import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user-balance-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule

  ],
  templateUrl: './user-balance-table.component.html',
  styleUrls: ['./user-balance-table.component.scss']
})
export class UserBalanceTableComponent {

  @Input() users: User[] = [];



  printTable(): void {
    window.print();
  }

  clearGlobalFilter(table: Table, input: HTMLInputElement): void {
    table.clear();
    input.value = '';
  }
}
