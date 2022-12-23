import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.svg',
  styles: []
})
export class GraphComponent {
  @Input() trashColor1!: string;
  @Input() trashColor2!: string;

}
