import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponentComponent } from './member-component.component';

describe('MemberComponentComponent', () => {
  let component: MemberComponentComponent;
  let fixture: ComponentFixture<MemberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
