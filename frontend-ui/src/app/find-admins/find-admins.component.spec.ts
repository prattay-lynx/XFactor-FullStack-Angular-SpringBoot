import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAdminsComponent } from './find-admins.component';

describe('FindAdminsComponent', () => {
  let component: FindAdminsComponent;
  let fixture: ComponentFixture<FindAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
