import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //Para recibir la property del mundo exterior
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 100
  }]

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
