import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsfeedComponent } from './dealsfeed.component';

describe('DealsfeedComponent', () => {
  let component: DealsfeedComponent;
  let fixture: ComponentFixture<DealsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
