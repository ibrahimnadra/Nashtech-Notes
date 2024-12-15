import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertNoteComponent } from './upsert-note.component';

describe('UpsertNoteComponent', () => {
  let component: UpsertNoteComponent;
  let fixture: ComponentFixture<UpsertNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
