import { Component } from '@angular/core';
import { Iplayers } from './shared/model/player.interface';
import { cricketers } from './shared/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machineTest';
  searchValue : string = ''
  selectValue : string = ''

  playersArr : Array<Iplayers> = cricketers;
  onSelect(ele: HTMLSelectElement){
    console.log(ele.value);
    this.selectValue = ele.value;
  }


}
