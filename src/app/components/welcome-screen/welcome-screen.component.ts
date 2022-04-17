import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MouseService } from '../../services/mouse.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.sass'],
})
export class WelcomeScreenComponent implements OnChanges {
  @Input() isWelcomeScreen: boolean = false;
  @Input() imgLoadFinish: boolean = false;

  @Output() imgLoadFinishEvent = new EventEmitter<void>();
  @Output() welcomeScreenFinishEvent = new EventEmitter<void>();

  // Make sure we show cursor 1 time only
  haveShowLoadingCursor: boolean = false;

  constructor(private mouseService: MouseService) {}

  ngOnChanges(changes: SimpleChanges) {
    // Prepare loading cursor when welcome screen and image have finish load, and we never load cursor first time
    if (
      this.isWelcomeScreen &&
      this.imgLoadFinish &&
      !this.haveShowLoadingCursor
    ) {
      this.prepareLoadingCursor();
      this.haveShowLoadingCursor = true;
    }
  }

  /**
   * Prepare for show loading cursor
   */
  prepareLoadingCursor(): void {
    const secondWaitingBeforeSetCursor = 200;

    setTimeout(() => {
      this.mouseService.setLoadingCursor();
      this.prepareLoadingCursorWithCursor(); // Prepare for showing loading cursor with cursor
    }, secondWaitingBeforeSetCursor);
  }

  /**
   * Prepare for show loading cursor with cursor
   */
  prepareLoadingCursorWithCursor(): void {
    const secondWaitingBeforeSetCursor = 1000;

    setTimeout(() => {
      this.mouseService.setLoadingCursorWithCursor();
      this.prepareDefaultCursor(); // Prepare showing default cursor
    }, secondWaitingBeforeSetCursor);
  }

  /**
   * Prepare for show default cursor
   */
  prepareDefaultCursor(): void {
    const secondWaitingBeforeSetCursor = 2000;

    setTimeout(() => {
      this.mouseService.setDefaultCursor();
      this.prepareEmitScreenFinish();
    }, secondWaitingBeforeSetCursor);
  }

  /**
   * Prepare for emit event
   */
  prepareEmitScreenFinish(): void {
    const secondWaitingBeforeEmitEvent = 1000;

    setTimeout(() => {
      this.welcomeScreenFinishEvent.emit();
    }, secondWaitingBeforeEmitEvent);
  }

  /**
   * When image load finish, emit the vent
   * @param event
   */
  onImgLoadFinish(event: Event): void {
    this.imgLoadFinishEvent.emit();
  }
}
