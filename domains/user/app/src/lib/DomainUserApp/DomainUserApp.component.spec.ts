import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainUserAppComponent } from './DomainUserApp.component';

describe('DomainUserAppComponent', () => {
  let component: DomainUserAppComponent;
  let fixture: ComponentFixture<DomainUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainUserAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
