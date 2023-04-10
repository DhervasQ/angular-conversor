
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'conversor';
  public cantidad: number = 0;

  public setMessage(message: number): void {
    this.cantidad = message;
  }

  
}
