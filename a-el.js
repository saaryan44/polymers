import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "./b-el.js";
class AEl extends PolymerElement {
  static get template(){
		return (html`<h3 on-click="px9">I am button in component a</h3> <div id="bme"><b-el iam-c="{{iamC}}"></be-el></div><style>#bme{border:3px solid black;background-color:lightblue;}</style>`);
	}
	px9(){alert('this is px9');this.p1Prop?alert('i was true before'):alert('i will be true now');this.p1Prop=!this.p1Prop;}
	static get properties(){return ({p1Prop:{type:Boolean,notify:true,value:false},iamC:{type:Boolean,notify:true,observer:'ppw',notify:true}});}
	ppw(){this.iamC?alert('I am true dialog from a'):alert('i am false dialog from a, clicked from c');}
}

window.customElements.define('a-el', AEl);
