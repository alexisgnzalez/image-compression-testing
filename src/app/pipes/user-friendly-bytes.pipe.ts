import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFriendlyBytes',
})
export class UserFriendlyBytesPipe implements PipeTransform {
  transform(bytes: number, precision?: number): string {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const exponent = Math.floor(Math.log(bytes) / Math.log(1024));
    const unit = units[exponent];
    const value = bytes / Math.pow(1024, exponent);
    if (precision) {
      return value.toFixed(precision) + ' ' + unit;
    } else {
      return value + ' ' + unit;
    }
  }
}
