import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppermaterialComponent } from './steppermaterial.component';

describe('SteppermaterialComponent', () => {
  let component: SteppermaterialComponent;
  let fixture: ComponentFixture<SteppermaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteppermaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteppermaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
