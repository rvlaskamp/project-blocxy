import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAuthDialogComponent } from './dialog.component';

describe('FeatureAuthDialogComponent', () => {
  let component: FeatureAuthDialogComponent;
  let fixture: ComponentFixture<FeatureAuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAuthDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
