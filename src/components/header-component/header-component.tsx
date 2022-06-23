import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {
  render() {
    return (
      <div class="header">
        <h1>
          <span style={{ color: '#308d46' }}>Notes</span> Dashboard
        </h1>
        {/* <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Toggle Mode</button> */}
      </div>
    );
  }
}