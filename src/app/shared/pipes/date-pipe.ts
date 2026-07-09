import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string | null): String {
    if (!date) {
      return 'No disponible';
    }
    return new Date(date).toLocaleDateString();
  }

}
