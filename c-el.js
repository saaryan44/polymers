import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class CEl extends PolymerElement {
 static get template(){return (html`<h4>hi i am c</h4><button on-click="sa">i am c button</button>`);}

	sa(){alert('I am toggling iamC from here, inside of C');this.iamC=!this.iamC;}
	static get properties(){return ({
		iamC:{type:Boolean,value:false,notify:true}
	});}
}

window.customElements.define('c-el', CEl);
