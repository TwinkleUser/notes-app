import { Component, h } from '@stencil/core';

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
          <span style={{ color: 'rgb(141, 139, 48)' }}>Notes</span> Dashboard
        </h1>
        {/* <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Toggle Mode</button> */}
      </div>
    );
  }
}
