import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../Note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-note',
  imports: [FormsModule],
  templateUrl: './view-note.component.html',
  styleUrl: './view-note.component.css'
})
export class ViewNoteComponent {
  @Input()
  note: Note = new Note;
  @Output() noteSelectToDelete:EventEmitter<Note>= new EventEmitter<Note>();
  @Output() noteSelectToUpdate:EventEmitter<Note>= new EventEmitter<Note>();
  @Output() disableDelete:EventEmitter<Event>= new EventEmitter<Event>();
  isChecked: boolean = false;

  /**If the #checkTheNote is checked, then noteSelectToDelete event is emitted 
   * and the checked note data is passed through the emitter
   * else If the #checkTheNote is unchecked, then disableDelete is emiited*/
  selectNoteToDelete(note: Note) {
    if(this.isChecked){
      console.log("selectNoteToDelete event is emitted")
      console.log(note);
      this.noteSelectToDelete.emit(note);
    }else{
      console.log("disableDelete event is emitted")
      this.disableDelete.emit();
    }
  }

   /**If the #titleLink is clicked, then noteSelectToUpdate event is emitted
   * and the selected note data is passed through the emitter */
  selectNoteToUpdate(note: Note) {
    console.log("noteSelectToUpdate event is emitted")
    this.noteSelectToUpdate.emit(note);
  }
}
