import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/player.interface';

@Pipe({
  name: 'playersPipe'
})
export class PlayersPipePipe implements PipeTransform {
  selectValue!: string;
  transform(value: Iplayers[], search: string, selectValue: string): Iplayers[] {
    let filterArr: Iplayers[] = value;
    if (!value) {
      return value
    }
    if (!search) {
      return value
    }
    if (selectValue === 'name') {
      filterArr = value.filter(play => {
        return play.name.toLocaleLowerCase().includes(search.trim())
      })
    }else if(selectValue === 'team'){
      filterArr = value.filter(play => {
        return play.team.toLowerCase().includes(search.trim())
      })
    }else if(selectValue === 'odiRuns'){
      filterArr = value.filter(play => {
        return play.odiRuns.includes(search.trim())
      })
    }else if(selectValue === 'testRuns'){
      filterArr = value.filter(play => {
        return play.testRuns.includes(search.trim())
      })
    }else if(selectValue === 'yearDebut'){
      filterArr = value.filter(play => {
        return play.yearDebut.includes(search.trim())
      })
    }
    return filterArr
  }

}
