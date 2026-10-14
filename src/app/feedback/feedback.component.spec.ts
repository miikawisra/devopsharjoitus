import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback.component';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent, BrowserAnimationsModule],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]*/
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have the correct header text', () => {
    expect(component.headerText).toBe('Give feedback');
  });

  it('should reject an empty title', () => {
    component.title?.setValue('');
    expect(component.title?.valid).toBeFalse();
  });

  it('should reject a title that is too short', () => {
    component.title?.setValue('A');
    expect(component.title?.valid).toBeFalse();
  });

  it('should accept a valid title', () => {
    component.title?.setValue('Feedback');
    expect(component.title?.valid).toBeTrue();
  });

  it('should accept a valid email address', () => {
    component.email?.setValue('test@example.com');
    expect(component.email?.valid).toBeTrue();
  });
});