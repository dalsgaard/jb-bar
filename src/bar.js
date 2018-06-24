import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { sum } from '@jyskebank/jb-utils/sum';
import '@jyskebank/jb-baz'

export class Bar extends PolymerElement {
  
  static get template() {
    return html`
      <section>
        <h5>Bar {{bar}}</h5>
        <jb-baz></jb-baz>
      </section>
    `;
  }

  ready () {
    super.ready();
    this.bar = sum(29, 13);
  }

}

customElements.define('jb-bar', Bar);
