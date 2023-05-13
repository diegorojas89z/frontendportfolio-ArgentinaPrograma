import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritsComponent } from './merits.component';

describe('MeritsComponent', () => {
  let component: MeritsComponent;
  let fixture: ComponentFixture<MeritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeritsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
