import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCountComponent {
  @Input() count?: number | null;

  noResultsText = 'No Results';

  get title(): string {
    return this.count ? `Results: ${this.count}` : this.noResultsText;
  }
}
