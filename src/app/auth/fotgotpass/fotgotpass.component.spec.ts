import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgotpassComponent } from './fotgotpass.component';

describe('FotgotpassComponent', () => {
  let component: FotgotpassComponent;
  let fixture: ComponentFixture<FotgotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotgotpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
