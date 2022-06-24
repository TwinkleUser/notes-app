import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'notes-component',
  styleUrl: 'notes-component.css',
  shadow: true,
})
export class NotesComponent {
  @Prop() text: string;

  @Prop() id: string;

  @Prop() date: any;

  @Prop() handleDelete: (id: any) => void;

  @Prop() handleEdit: (id: any, text: string) => void;

  @State() updatedText: string;

  @State() isUpdate: boolean = false;

  componentWillLoad() {
    this.updatedText = this.text;
  }

  handleChange(event): void {
    const charLimit = 300;
    if (charLimit - event.target.value.length >= 0) {
      this.updatedText = event.target.value;
    }
  }

  @Listen('click')
  enableEditing() {
    this.isUpdate = true;
  }


  render() {
    return (
      <div class="note">
        {this.isUpdate && <textarea cols={10} rows={8} placeholder="Type to add a new note..." onChange={this.handleChange.bind(this)} value={this.updatedText}></textarea>}
        {!this.isUpdate && <span>{this.updatedText}</span>}

        <div class="note-footer">
          <small>{this.date}</small>
          {this.isUpdate && (
            <button
              class="save"
              onClick={() => {
                this.handleEdit(this.id, this.updatedText);
                this.isUpdate = false;
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
      </div>
    );
  }
}
