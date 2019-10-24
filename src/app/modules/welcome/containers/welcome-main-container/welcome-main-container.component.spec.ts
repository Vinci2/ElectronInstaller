import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMainContainerComponent } from './welcome-main-container.component';

describe('WelcomeMainContainerComponent', () => {
  let component: WelcomeMainContainerComponent;
  let fixture: ComponentFixture<WelcomeMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
