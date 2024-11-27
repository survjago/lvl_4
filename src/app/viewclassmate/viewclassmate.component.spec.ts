import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassmateComponent } from './viewclassmate.component';

describe('ViewclassmateComponent', () => {
  let component: ViewclassmateComponent;
  let fixture: ComponentFixture<ViewclassmateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewclassmateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclassmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
