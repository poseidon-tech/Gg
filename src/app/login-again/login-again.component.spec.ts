import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgainComponent } from './login-again.component';

describe('LoginAgainComponent', () => {
  let component: LoginAgainComponent;
  let fixture: ComponentFixture<LoginAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAgainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
