import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countyFilter'
})
export class CountyFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
