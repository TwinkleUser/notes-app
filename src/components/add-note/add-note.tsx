import { Component, Prop, h, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'add-note',
  styleUrl: 'add-note.css',
  shadow: true,
})
export class AddNote {
  /**
   * The first name
   */
  @Prop() handleAddNote: any;

  @State() noteText: any='';

  private charLimit = 300;
  private handleChange(event): void {
    if(this.charLimit - event.target.value.length>=0){
        this.noteText = event.target.value;
    }
   
  };

  private handleSaveClick(): void {
    console.log(this.noteText);
    if(this.noteText.trim().length>0){
        this.handleAddNote(this.noteText);
        this.noteText ='';
    }
   
   
  };

  render() {
    return (
        <div class="note new">
        {/*the text area for our input*/}
            <textarea  cols={10} rows={8} placeholder="Type to add a new note..."
            onChange={this.handleChange.bind(this)} value={this.noteText}
            ></textarea>
            <div class="note-footer">
                <small>{this.charLimit - this.noteText.length} Remaining</small>
                <button class="save" onClick={this.handleSaveClick.bind(this)}>Save</button>
            </div>
        </div>
    )
}
}