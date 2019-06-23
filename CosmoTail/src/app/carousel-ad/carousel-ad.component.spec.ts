import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAdComponent } from './carousel-ad.component';

describe('CarouselAdComponent', () => {
  let component: CarouselAdComponent;
  let fixture: ComponentFixture<CarouselAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
