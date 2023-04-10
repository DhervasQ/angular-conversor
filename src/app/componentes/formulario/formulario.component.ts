import { Component,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  @Output() public emitMessage = new EventEmitter<any>();

  eligeCantidad (event: any){
    this.emitMessage.emit(event.target.value);

  }
}
