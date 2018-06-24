import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export class Bar extends PolymerElement {
  
  static get template() {
    return html`
      <section>Bar!</section>
    `;
  }

}

customElements.define('jb-bar', Bar);
