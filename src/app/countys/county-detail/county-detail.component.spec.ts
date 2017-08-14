import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyDetailComponent } from './county-detail.component';

describe('CountyDetailComponent', () => {
  let component: CountyDetailComponent;
  let fixture: ComponentFixture<CountyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
