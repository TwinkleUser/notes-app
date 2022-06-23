import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'notes-list',
  styleUrl: 'notes-list.css',
  shadow: true,
})
export class NotesList {
  @Prop() notes: any;

  @Prop() handleAddNote: (e: any) => void;

  @Prop() handleDelete: any;

  render() {
    return (
      <div class="notes-list">
        {this.notes.map(note => (
          <notes-component id={note.id} text={note.text} date={note.date} handleDelete={this.handleDelete} />
        ))}
        <add-note handleAddNote={e => this.handleAddNote(e)} />
      </div>
    );
  }
}
