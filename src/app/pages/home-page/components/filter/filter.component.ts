import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() filter = new EventEmitter<string>();

  destroy$ = new Subject<void>();
  control = new FormControl();

  ngOnInit(): void {
    this.listenValueChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private listenValueChanges() {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(300)
      )
      .subscribe((value) => {
        this.emitValue(value);
      });
  }

  private emitValue(value: any) {
    this.filter.emit(value);
  }
}
