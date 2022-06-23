import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'notes-component',
  styleUrl: 'notes-component.css',
  shadow: true,
})
export class NotesComponent {
  /**
   * The first name
   */
  // @Prop() id: any;

  /**
   * The middle name
   */
  @Prop() text: string;

  /**
   * The last name
   */
  @Prop() date: any;


  @Prop() handleDelete: any;

//   private getText(): string {
//     return format(this.first, this.middle, this.last);
//   }

  render() {
    return (
        <div class="note">
            <span>{this.text}</span>
            
            <div class="note-footer">
                <small>{this.date}</small>
                {/* <MdDeleteForever onClick={()=>this.handleDelete(id)} className="delete-icon" size="1.3em" /> */}
            </div>
            
        </div>
    )
}
}