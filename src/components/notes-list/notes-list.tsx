import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'notes-list',
  styleUrl: 'notes-list.css',
  shadow: true,
})
export class NotesList {
  @Prop() notes: any;

  @Prop() handleAddNote: (e: any) => void;

  @Prop() handleDelete: (id: any) => void;

  @Prop() handleEdit: (id: any, text: string) => void;

  render() {
    return (
      <div class="notes-list">
        {this.notes.map(note => (
          <notes-component
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={id => this.handleDelete(id)}
            handleEdit={(id: any, text: string) => this.handleEdit(id, text)}
          />
        ))}
        <add-note handleAddNote={e => this.handleAddNote(e)} />
      </div>
    );
  }
}
