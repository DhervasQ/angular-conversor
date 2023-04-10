import { Component,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.scss']
})
export class ValorComponent {
  @Input() public rate!: any;
  @Input() public seleccionada!: any;
  @Input() public cantidad!: any;
  @Output() public emitMessage = new EventEmitter<any>();
  seleccionaDivisa(rate:string){
    this.emitMessage.emit(rate);
  }
}
