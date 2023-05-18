import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMigrationComponent } from './list-migration.component';

describe('ListMigrationComponent', () => {
  let component: ListMigrationComponent;
  let fixture: ComponentFixture<ListMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
