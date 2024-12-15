import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from './Note';
import { ViewNoteComponent } from './Components/view-note/view-note.component';
import { UpsertNoteComponent } from './Components/upsert-note/upsert-note.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ViewNoteComponent, UpsertNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nashtech-notes';
  localItem!: string | null;
  notesInLocalStorage!: Note[];
  notesToBeDeleted: Note[]=[];
  isButtonDisabled = true;
  noteHomePage:boolean = true;
  noteToBeUpserted!: Note;

  /**On instantiating AppComponent class, the notes saved data is retreived from the local storage 
   * and is assigned to the class variable : notesInLocalStorage*/
  constructor(){
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem("notes");
      if(this.localItem == null){
      this.notesInLocalStorage = [];
      }
      else{ 
        this.notesInLocalStorage = JSON.parse(this.localItem); 
      }
    }
  }

  /**It listens to the noteSelectToDelete event, which is triggered from its child class: ViewNoteComponent
   * and pushes the output(checked note) of the event in the notesToBeDeleted array 
   * and eventually enables the delete button
  */
  enableDelete(note: Note) {
    console.log("noteSelectToDelete event is listened")
    this.notesToBeDeleted.push(note);
    this.isButtonDisabled = false; 
  }

  /**It listens to the disableDelete event, which is triggered from its child class: ViewNoteComponent
   * and initializes the notesToBeDeleted array to an empty array
   * and eventually disables the delete button
  */
  disableDeleteButton() {
    console.log("disableDelete event is listened")
    this.notesToBeDeleted =[];
    this.isButtonDisabled = true; 
  }
   
  /**It listens to the noteSelectToUpdate event, which is triggered from its child class: ViewNoteComponent
   * and assigns the output(selected note) of the event to the noteToBeUpserted variable
   * and assigns the noteHomePage to false, to hide the AppComponent
  */
  updateNote(note: Note) {
    console.log("updateNote event is listened")
    this.noteToBeUpserted = note;
    console.log("The selected note which is to be updated", this.noteToBeUpserted)
    this.noteHomePage = false
  }

  /**It listens to the click event, which is triggered on the #addTheNote button
   * and creates a new note object
   * and assigns the noteHomePage to false, to hide the AppComponent
  */
  insertNote() {
    console.log("click event on the #addTheNote button is listened")
    this.noteToBeUpserted = new Note();  
    console.log(this.noteToBeUpserted)
    this.noteHomePage = false;
  }

  /**It listens to the click event, which is triggered on the #deleteTheNotes button
   * and deletes all the notes which are there in notesToBeDeleted, from the local storage
    * and initializes the notesToBeDeleted array back to an empty array
  */
  deleteNotes() {
    for(let noteToBeDeleted of this.notesToBeDeleted){
      const index = this.notesInLocalStorage.findIndex(note => note === noteToBeDeleted);
      console.log("notesToBeDeleted",  noteToBeDeleted)
      this.notesInLocalStorage.splice(index, 1);
    }
    // printing the final notes array
    for(let note of this.notesInLocalStorage){
      console.log("note",  note)
    }
    // updating the notes in the local storage
    localStorage.setItem('notes', JSON.stringify(this.notesInLocalStorage));
    this.notesToBeDeleted =[];
  }

  /**It listens to the noteSave event, which is triggered from its child class: UpsertNoteComponent
   * and finds the output(upserted note) of the event in the notesInLocalStorage array
   * if found, it updates the note, else it pushes the new note
   * and eventually the changes are saved to localStorage
  */
  saveNoteToLocal(noteToBeSaved: Note) {
    console.log("noteSave event is listened")
    console.log('noteToBeSaved', noteToBeSaved)
    const index = this.notesInLocalStorage.findIndex(note => note === noteToBeSaved);
    if (index !== -1) {
      this.notesInLocalStorage[index] = noteToBeSaved;
      console.log("Note updated:", this.notesInLocalStorage[index]);
    } else {
      this.notesInLocalStorage.push(noteToBeSaved);
      console.log("New Note inserted!");
    }
    localStorage.setItem('notes', JSON.stringify(this.notesInLocalStorage));
  }
 
  /**It listens to the backHome event, which is triggered from its child class: UpsertNoteComponent
   * and assigns the noteHomePage back to true, to hide the child component
  */
  onHomePage() {
    console.log("backHome event is listened")
    this.noteHomePage = true;
  }
}



