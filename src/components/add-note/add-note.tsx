import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'add-note',
  styleUrl: 'add-note.css',
  shadow: true,
})
export class AddNote {
  @Prop() handleAddNote: (e: any) => void;

  @State() noteText: any = '';

  private charLimit = 300;

  handleChange(event): void {
    if (this.charLimit - event.target.value.length >= 0) {
      this.noteText = event.target.value;
    }
  }

  render() {
    return (
      <div class="note new">
        <textarea cols={10} rows={8} placeholder="Type to add a new note..." onChange={this.handleChange.bind(this)} value={this.noteText}></textarea>
        <div class="note-footer">
          <small>{this.charLimit - this.noteText.length} Remaining</small>
          <button
            class="save"
              onClick={() =>{this.handleAddNote(this.noteText);this.noteText=''}}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
