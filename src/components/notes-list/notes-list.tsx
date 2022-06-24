import { Component, Prop, h } from '@stencil/core';
import { Notes } from '../notes-dashboard/notes-dashboard';

@Component({
  tag: 'notes-list',
  styleUrl: 'notes-list.css',
  shadow: true,
})
export class NotesList {
  @Prop() notes: Notes[];

  @Prop() handleAddNote: (text: string) => void;

  @Prop() handleDelete: (id: string) => void;

  @Prop() handleEdit: (id: string, text: string) => void;

  render() {
    return (
      <div class="notes-list">
        {this.notes.map(note => (
          <notes-component
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={id => this.handleDelete(id)}
            handleEdit={(id: string, text: string) => this.handleEdit(id, text)}
          />
        ))}
        <add-note handleAddNote={text => this.handleAddNote(text)} />
      </div>
    );
  }
}
