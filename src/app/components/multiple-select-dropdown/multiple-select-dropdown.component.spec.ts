import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectDropdownComponent } from './multiple-select-dropdown.component';

describe('MultipleSelectDropdownComponent', () => {
  let component: MultipleSelectDropdownComponent;
  let fixture: ComponentFixture<MultipleSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
