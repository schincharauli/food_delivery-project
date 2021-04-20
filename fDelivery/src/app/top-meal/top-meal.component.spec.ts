import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMealComponent } from './top-meal.component';

describe('TopMealComponent', () => {
  let component: TopMealComponent;
  let fixture: ComponentFixture<TopMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
