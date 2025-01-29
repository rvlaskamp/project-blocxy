import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtrBlocxHomeComponent } from './blocx-home.component';

describe('BlocxHomeComponent', () => {
  let component: FtrBlocxHomeComponent;
  let fixture: ComponentFixture<FtrBlocxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtrBlocxHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FtrBlocxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
