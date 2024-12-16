# NashtechNotes

## Overview

This project is a single page web application designed to manage notes.
There are multiple components on the page, which will make it look like different pages. 
Through this we can add notes and save them to the local storage of the browser. 
Also we can edit the existing notes, by clicking on them and can save the updated note to the local storage. 
By checking the checkbox adjacent to the notes on the home page, we can select them to be deleted, this will enable the delete button, otherwise the delete button will be disabled. 
And on clicking the delete button, all the checked notes are deleted.

## Components

### AppComponent
This is the root component of the application, having two child components: 
ViewNoteComponent, UpsertNoteComponent

- if the noteHomePage variable is set to true, it will hide the UpsertNoteComponent component and display the div component which has the necessary components related to the note home page, else it will display that and hide the div component.
The UpsertNoteComponent expects the input data noteToBeUpserted from the AppComponent.
and the AppComponent listens to two events from the UpsertNoteComponent: 
  - noteSave and then calls the saveNoteToLocal method with output noteToBeSaved data recieved from the event.
  - backHome and then calls the onHomePage method.


- Under the div element:

   - there is a div element with ngFor directive, which iterates through the notes stored in the local storage, and displays the ViewNoteComponent for each note.  
   The ViewNoteComponent expects the input data note from the AppComponent.
   and the AppComponent listens to three events from the ViewNoteComponent: 
    - noteSelectToDelete and then calls the enableDelete method with output note data recieved from the event.
    - noteSelectToUpdate and then calls the updateNote method with output note data recieved from the event.
    - disableDelete and then calls the disableDeleteButton method.

   - there is a div element, under which there are two buttons:
     - #addTheNote : listens to click event and then calls the insertNote method. 
     - #deleteTheNotes : listens to click event and then calls the deleteNotes method.

### UpsertNoteComponent
This component is displayed when the noteHomePage variable is false.

- Under the first div element of the div container element, there are two elements:
  - #noteTitlearea : it's an input element, which by default shows the title of the noteToBeUpserted recieved from the AppComponent.
  - #noteTextarea : it's an textarea element, which by default shows the text of the noteToBeUpserted recieved from the AppComponent.

- Under the second div element of the div container element, there are two buttons:
     - #saveTheNote : listens to click event and then calls the saveNote method.
     - #backHome : listens to click event and then calls the backToHome method.

### ViewNoteComponent
This component is displayed for each note stored in the local storage. 

- Under the div element, there are three elements:
  - #checkTheNote: listens to change event and then calls the selectNoteToDelete method.
  - #noteTitleLink: listens to click event and then calls the selectNoteToUpdate method and displays the title of the note recieved from the AppComponent.
  - #noteText: displays the text of the note recieved from the AppComponent.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher recommended)

- npm (comes with Node.js)

- Angular CLI (install with npm install -g @angular/cli if not already installed)

## Installation

Follow these steps to clone the repository, install dependencies, and run the application:

### Clone the Repository
```bash
git clone [repository-url]
cd Nashtech-Notes
```

### Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### Run the Application
Start the development server and open the application in your default browser:
```bash
ng serve --open
```

If the --open flag doesn’t work, manually open your browser and navigate to `http://localhost:4200/`.

## Usage

- Click the add button, to add new note and modify the default title and text.
- Click the save button, to save the new note.
- Click the back button, to go to the note home page or root component.
- Click the title of the existing note on the note home page, it will redirect you to the UpsertComponent, where you can modify the existing note and then save the changes and go back to the note home page.
- Click the checkbox adjacent to the note and then the delete button will enable. 
- Click the checkbox for all the notes that you want to delete.
- Click the delete button and all the checked notes will be deleted.


