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
}
