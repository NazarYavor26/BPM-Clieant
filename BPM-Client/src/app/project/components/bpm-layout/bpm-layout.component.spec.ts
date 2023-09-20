import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmLayoutComponent } from './bpm-layout.component';

describe('BpmLayoutComponent', () => {
  let component: BpmLayoutComponent;
  let fixture: ComponentFixture<BpmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
