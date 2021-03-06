/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StorageFormComponent } from './storage-form.component';

describe('StorageFormComponent', () => {
  let component: StorageFormComponent;
  let fixture: ComponentFixture<StorageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
