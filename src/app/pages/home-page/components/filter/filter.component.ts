import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Output() filter = new EventEmitter<string>();

  // @ts-ignore
  emitValue({ target: { value } }: Event): void {
    this.filter.emit(value);
  }
}
