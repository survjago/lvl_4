import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdisplayComponent } from './viewdisplay.component';

describe('ViewdisplayComponent', () => {
  let component: ViewdisplayComponent;
  let fixture: ComponentFixture<ViewdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
