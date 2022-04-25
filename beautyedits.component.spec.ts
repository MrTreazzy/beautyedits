import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyeditsComponent } from './beautyedits.component';

describe('BeautyeditsComponent', () => {
  let component: BeautyeditsComponent;
  let fixture: ComponentFixture<BeautyeditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyeditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyeditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
