import { LightningElement } from 'lwc';

export default class Light123 extends LightningElement {
        greeting = 'World';
        changeHandler(event) {
          this.greeting = event.target.value;
        }
}