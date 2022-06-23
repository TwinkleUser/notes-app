import { Component, Prop, h } from '@stencil/core';
import { AddNote } from '../add-note/add-note';
import { NotesComponent } from '../notes-component/notes-component';
// import {Notes} from './notes';
// import { format } from '../../utils/utils';

@Component({
  tag: 'notes-list',
  styleUrl: 'notes-list.css',
  shadow: true,
})
export class NotesList {
  /**
   * The first name
   */
  @Prop() notes: any;

  /**
   * The middle name
   */
  @Prop() handleAddNote: string;

  /**
   * The last name
   */
  @Prop() handleDelete: any;


//   private getText(): string {
//     return format(this.first, this.middle, this.last);
//   }

  render() {
    return (
        <div class="notes-list">
           {this.notes.map((note)=>
               <NotesComponent id={note.id} text={note.text} date={note.date}
               handleDelete={this.handleDelete}
               />
           )}
           <AddNote handleAddNote={this.handleAddNote}/>
        </div>
    )
}
}