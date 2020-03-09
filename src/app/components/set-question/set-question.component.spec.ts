import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetQuestionComponent } from './set-question.component';

describe('SetQuestionComponent', () => {
  let component: SetQuestionComponent;
  let fixture: ComponentFixture<SetQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
