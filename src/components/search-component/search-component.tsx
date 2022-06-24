import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'search-component',
  styleUrl: 'search-component.css',
  shadow: true,
})
export class SearchComponent {
  @Prop() handleSearch: (text: string) => void;

  @State() searchText ='';

  render() {
    return (
      <div class="search">
        <input
          type="text"
          placeholder="Search for your notes..."
          onInput={event => {
            this.searchText= (event.target as HTMLInputElement).value;
            this.handleSearch((event.target as HTMLInputElement).value);
          }}
          value={this.searchText}
        />
        <button
            class="clear"
              onClick={() =>{this.handleSearch('');this.searchText=''}}
          >
            Clear
          </button>
      </div>
    );
  }
}
