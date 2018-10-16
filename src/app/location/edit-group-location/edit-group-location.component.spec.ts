import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupLocationComponent } from './edit-group-location.component';

describe('EditGroupLocationComponent', () => {
  let component: EditGroupLocationComponent;
  let fixture: ComponentFixture<EditGroupLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
