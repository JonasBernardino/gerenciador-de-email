import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClientComponent } from './open-client.component';

describe('OpenClientComponent', () => {
  let component: OpenClientComponent;
  let fixture: ComponentFixture<OpenClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
