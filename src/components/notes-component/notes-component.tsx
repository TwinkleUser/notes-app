import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'notes-component',
  styleUrl: 'notes-component.css',
  shadow: true,
})
export class NotesComponent {
  @Prop() text: string;

  @Prop() date: any;

  @Prop() handleDelete: any;


  render() {
    return (
      <div class="note">
        <span>{this.text}</span>

        <div class="note-footer">
          <small>{this.date}</small>
          {/* <MdDeleteForever onClick={()=>this.handleDelete(id)} className="delete-icon" size="1.3em" /> */}
        </div>
      </div>
    );
  }
}
