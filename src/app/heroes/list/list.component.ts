import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Thor', 'Iroman', 'Black Widow'];
  public ultimoBorrado?: string;

  removeLastHero(): string | undefined {
    this.ultimoBorrado = this.heroeNames.pop();
    return this.ultimoBorrado;
  }
}
