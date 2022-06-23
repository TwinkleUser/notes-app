import { Component, Prop, h } from '@stencil/core';
// import { AddNote } from '../add-note/add-note';
// import { NotesComponent } from '../notes-component/notes-component';
// import {Notes} from './notes';
// import { format } from '../../utils/utils';

@Component({
  tag: 'notes-list',
  styleUrl: 'notes-list.css',
  shadow: true,
})
export class NotesList {
  
  @Prop() notes: any;

  @Prop() handleAddNote: any;

  @Prop() handleDelete: any;

  // constructor(){}

  // componentDidLoad()
  // {
  //   console.log(this.notes);
  // }
 
  render() {
    return (
        <div class="notes-list">
           {this.notes.map((note)=>
               <notes-component id={note.id} text={note.text} date={note.date}
               handleDelete={this.handleDelete}
               />
           )}
           <add-note handleAddNote={this.handleAddNote}/>
        </div>
    );
}
}