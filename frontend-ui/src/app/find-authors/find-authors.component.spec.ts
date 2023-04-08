import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAuthorsComponent } from './find-authors.component';

describe('FindAuthorsComponent', () => {
  let component: FindAuthorsComponent;
  let fixture: ComponentFixture<FindAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
