import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, defectValue: string): string {
    return ( value ) ? value : defectValue;
  }
}
