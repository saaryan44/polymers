import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "./a-el.js";
class PEl extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
	<a-el p1-prop="{{p0Prop}}"></a-el>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'p-el',
      },
	p0Prop:{
		type:Boolean,value:false, notify:true,observer:"_fx"
	}
    };
  }
	_fx(){alert(this.p0Prop);}
}

window.customElements.define('p-el', PEl);
