import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../Note';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upsert-note',
  imports: [CommonModule, FormsModule],
  templateUrl: './upsert-note.component.html',
  styleUrl: './upsert-note.component.css'
})
export class UpsertNoteComponent {

  @Input()
  noteToBeUpserted!: Note;
  @Output() noteSave:EventEmitter<Note>= new EventEmitter<Note>();
  @Output() backHome:EventEmitter<Event>= new EventEmitter<Event>();
 
   /**If the #saveTheNote button is clicked, then noteSave event is emitted
   * and the upserted note data is passed through the emitter */
  saveNote() {
    console.log("noteSave event emitted")
    console.log("this.noteToBeUpserted", this.noteToBeUpserted)
    this.noteSave.emit(this.noteToBeUpserted);
  }

   /**If the #backHome is clicked, then backHome event is emitted */
  backToHome() {
    this.backHome.emit();
  }
   
}
