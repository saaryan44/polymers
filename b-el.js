import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "./c-el.js";
class BEl extends PolymerElement {
  static get template(){
		return (html`<h3 on-click="px9">I am button in component a</h3> <hr /><c-el iam-c="{{iamC}}"></c-el><hr />`);
	}
	px9(){alert('this is px9');this.p1Prop?alert('i was true before'):alert('i will be true now');this.p1Prop=!this.p1Prop;}
	static get properties(){return ({p1Prop:{type:Boolean,notify:true,value:false},iamC:{type:Boolean,notify:true}});}
	
	
}

window.customElements.define('b-el', BEl);
