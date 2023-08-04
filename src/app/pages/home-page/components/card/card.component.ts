import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Articles } from "../../../../interfaces/acticles";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() item!: Articles.Item;
  @Input() searchText!: string;

  readonly MAX_SUMMARY_LENGTH = 100;

  get continuationSign(): string {
    return this.item.summary.length > this.MAX_SUMMARY_LENGTH ? '...' : '';
  }
}
