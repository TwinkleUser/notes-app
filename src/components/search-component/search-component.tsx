import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'search-component',
  styleUrl: 'search-component.css',
  shadow: true,
})
export class SearchComponent {
  @Prop() handleSearch:(text:any)=>any;
  render() {
    return (
      <div class="search">
        <input type="text" placeholder="Search for your notes..." 
        onInput={(event) => {console.log(event.target);this.handleSearch((event.target as HTMLInputElement).value)}} 
        />
      </div>
    );
  }
}
