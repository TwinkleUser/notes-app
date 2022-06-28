import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'add-note',
  styleUrl: 'add-note.css',
  shadow: true,
})
export class AddNote {
  @Prop() handleAddNote: (text: string) => void;

  @State() noteText = '';

  private charLimit = 300;

  handleChange(event): void {
    if (this.charLimit - event.target.value.length >= 0) {
      this.noteText = event.target.value;
    } 
  }

  render() {
    return (
      <div class="note new">
        <textarea maxLength={this.charLimit} cols={10} rows={8} placeholder="Type to add a new note..." onInput={this.handleChange.bind(this)} value={this.noteText}></textarea>
        <div class="note-footer">
          <small>{this.charLimit - this.noteText.length} Remaining</small>
          <button
            class="save"
            onClick={() => {
              this.handleAddNote(this.noteText);
              this.noteText = '';
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
