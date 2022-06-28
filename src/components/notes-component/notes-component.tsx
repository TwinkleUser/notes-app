import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'notes-component',
  styleUrl: 'notes-component.css',
  shadow: true,
})
export class NotesComponent {
  @Prop() text: string;

  @Prop() id: string;

  @Prop() date: string;

  @Prop() handleDelete: (id: string) => void;

  @Prop() handleEdit: (id: string, text: string) => void;

  @State() updatedText: string;

  @State() isUpdate = false;

  componentWillLoad() {
    this.updatedText = this.text;
  }
  private  charLimit = 300;

  handleChange(event): void {
    if (this.charLimit - event.target.value.length >= 0) {
      this.updatedText = event.target.value;
    }
  }

  @Listen('click')
  enableEditing(event) {
    this.isUpdate = true;
    event.stopPropagation();
  }

  @Listen('outsideClick', { target: 'document' })
  getChangedValue(event: CustomEvent) {
    if (event.detail) {
      this.isUpdate = false;
    }
  }
  render() {
    return (
      <div class="note">
        {this.isUpdate && <textarea maxLength={this.charLimit} cols={10} rows={8} placeholder="Type to add a new note..." onInput={this.handleChange.bind(this)} value={this.updatedText}></textarea>}
        {!this.isUpdate && <span>{this.updatedText}</span>}

        <div class="note-footer">
          <small>{this.date}</small>
          {this.isUpdate && (
            <button
              class="save"
              onClick={e => {
                this.handleEdit(this.id, this.updatedText);
                this.isUpdate = false;
                e.stopPropagation();
              }}
            >
              Update
            </button>
          )}

          <button
            class="button"
            onClick={() => {
              this.handleDelete(this.id);
            }}
          >
            Delete
          </button>
        </div>
        <small>{this.charLimit - this.updatedText.length} Remaining</small>
      </div>
    );
  }
}
