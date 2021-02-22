import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserExampleComponent } from './list-user-example.component';

describe('ListUserExampleComponent', () => {
  let component: ListUserExampleComponent;
  let fixture: ComponentFixture<ListUserExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
