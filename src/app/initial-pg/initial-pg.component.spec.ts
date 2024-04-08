import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPgComponent } from './initial-pg.component';

describe('InitialPgComponent', () => {
  let component: InitialPgComponent;
  let fixture: ComponentFixture<InitialPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
