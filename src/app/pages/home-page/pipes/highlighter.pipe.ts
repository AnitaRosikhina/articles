import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if(!args) return value;

    const re = new RegExp(args, 'igm');
    value = value.replace(re, '<span class="highlighted-text">$&</span>');
    return value;
  }
}
