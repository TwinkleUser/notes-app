import { Component, Prop, h, State, Watch } from '@stencil/core';
import { nanoid } from 'nanoid';

const defaultNotes = [
  {
    id: nanoid(),
    text: 'This is my first note',
    date: '03/15/2022',
  },
  {
    id: nanoid(),
    text: 'This is my second note',
    date: '06/21/2022',
  },
  {
    id: nanoid(),
    text: 'This is my third note',
    date: '03/11/2021',
  },
];

@Component({
  tag: 'notes-dashboard',
  styleUrl: 'notes-dashboard.css',
  shadow: true,
})
export class NotesDashboard {
  @State() searchText: string = '';
  @State() notes: any = defaultNotes;

  componentWillLoad() {
    const savedNotes = JSON.parse(localStorage.getItem('stencils-notes-data')) || defaultNotes;
    console.log('component will load was caled.');
    console.log(savedNotes);
    if (savedNotes) {
      this.notes = savedNotes;
    }
  }

  componentDidUpdate() {
    localStorage.setItem('stencils-notes-data', JSON.stringify(this.notes));
  }

  public addNotes(text: any): void {
    if (text.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      console.log(this);
      const newNotes = [...this.notes, newNote];
      this.notes = newNotes;
    }
  }

  private handleSearch(text: any) {
    this.searchText = text;
  }

  private deletingNote(id: any): void {
    const newNotes = this.notes.filter(note => note.id !== id);
    this.notes = newNotes;
  }

  public editNote(id: any, text: any): void {
    const newState = this.notes.map(obj => {
      if (obj.id === id) {
        return { ...obj, text: text };
      }
      return obj;
    });
    this.notes = newState;
  }

  render() {
    return (
      <div class="container">
        <header-component />
        <search-component handleSearch={text => this.handleSearch(text)} />
        <notes-list
          notes={this.notes.filter(note => note.text.toLowerCase().includes(this.searchText))}
          handleAddNote={e => this.addNotes(e)}
          handleDelete={id => this.deletingNote(id)}
          handleEdit={(id: any, text: string) => this.editNote(id, text)}
        />
      </div>
    );
  }
}
