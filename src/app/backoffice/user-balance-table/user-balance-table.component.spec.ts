import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBalanceTableComponent } from './user-balance-table.component';

describe('UserBalanceTableComponent', () => {
  let component: UserBalanceTableComponent;
  let fixture: ComponentFixture<UserBalanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserBalanceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBalanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
