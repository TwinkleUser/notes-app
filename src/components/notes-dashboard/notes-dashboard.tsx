import { Component, Prop, h, State } from '@stencil/core';
import { NotesList } from '../notes-list/notes-list';
 
// import { format } from '../../utils/utils';
import {nanoid} from 'nanoid';
import { AddNote } from '../add-note/add-note';

@Component({
  tag: 'notes-dashboard',
  styleUrl: 'notes-dashboard.css',
  shadow: true,
})
export class NotesDashboard {
  
 
  @State() notes: any = [
    {
    id: nanoid(),
    text:"This is my first note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date:"03/11/2021"
  },
 
]

// componentWillLoad(){
//     const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
//   if(savedNotes){
//     this.notes = savedNotes;
//   }
// }

// componentShouldUpdate(newVal:any, oldVal:any, propName:any)
// {
//     if(propName==this.notes)
//     localStorage.setItem('react-notes-app-data',JSON.stringify(this.notes))
// }

// useEffect(()=>{
//     localStorage.setItem('react-notes-app-data',JSON.stringify(this.notes))
//   },[this.notes])

private addNotes(text:any): void {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...this.notes,newNote]
    this.notes=newNotes;
   
  };

  private deletingNote(id:any): void {
    const newNotes = this.notes.filter((note)=> note.id!==id);
    this.notes=newNotes;
  };

//   private getText(): string {
//     return format(this.first, this.middle, this.last);
//   }

  render() {
    return <div class="container">
        <notes-list 
        notes={this.notes}
         handleAddNote={this.addNotes} 
         handleDelete={this.deletingNote}/>
    </div>;
  }
}