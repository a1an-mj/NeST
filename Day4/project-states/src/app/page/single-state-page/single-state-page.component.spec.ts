import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStatePageComponent } from './single-state-page.component';

describe('SingleStatePageComponent', () => {
  let component: SingleStatePageComponent;
  let fixture: ComponentFixture<SingleStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleStatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
