import {bindable, inject} from 'aurelia-framework';
import '../../node_modules/@material/elevation/dist/mdc.elevation.css';
import './ExpansionPanelCustomElement.css';

@inject(Element)
export class ExpansionPanelCustomElement {
    @bindable id: string;
    @bindable expanded = false;
    @bindable label: string;
    @bindable value: string;

    constructor(private element: Element) {

    }

    toggleExpansion() {
        this.expanded = !this.expanded;
        this.element.classList.toggle('expanded', this.expanded === true);
        this.element.classList.toggle('collapsed', this.expanded === false);
    }
}
