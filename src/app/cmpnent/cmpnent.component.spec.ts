import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpnentComponent } from './cmpnent.component';

describe('CmpnentComponent', () => {
  let component: CmpnentComponent;
  let fixture: ComponentFixture<CmpnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
