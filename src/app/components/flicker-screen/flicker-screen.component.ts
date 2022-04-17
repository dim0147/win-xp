import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MouseService } from '../../services/mouse.service';

type Step = 'black-screen' | 'grey-screen' | 'black-screen-2';

@Component({
  selector: 'app-flicker-screen',
  templateUrl: './flicker-screen.component.html',
  styleUrls: ['./flicker-screen.component.sass'],
})
export class FlickerScreenComponent implements OnInit {
  @Output() flickerScreenFinishEvent = new EventEmitter<void>();

  // Default is black screen showing, progress: black-screen > grey-screen > black-screen-2
  step: Step = 'black-screen';

  constructor(private mouseService: MouseService) {}

  ngOnInit(): void {
    // Start prepare for grey screen
    this.prepareGreyScreen();
  }

  /**
   * Prepare for showing grey screen
   */
  prepareGreyScreen(): void {
    const secondWaitingBeforeChangeToGreyScreen = 2000;

    setTimeout(() => {
      this.step = 'grey-screen';
      this.prepareBlackScreen2(); // prepare showing background screen again
    }, secondWaitingBeforeChangeToGreyScreen);
  }

  /**
   * Prepare for showing background screen again
   */
  prepareBlackScreen2(): void {
    const secondWaitingBeforeChangeToBlackScreen2 = 2000;

    setTimeout(() => {
      this.step = 'black-screen-2';
      this.mouseService.setDefaultCursor(); // Show default cursor
      this.prepareLoadingCursorWithCursor(); // Prepare for show loading cursor with cursor
    }, secondWaitingBeforeChangeToBlackScreen2);
  }

  /**
   * Prepare for show loading cursor with cursor
   */
  prepareLoadingCursorWithCursor(): void {
    const secondWaitingBeforeSetCursor = 700;

    setTimeout(() => {
      this.mouseService.setLoadingCursorWithCursor();
      this.prepareEmitFinishEvent(); // prepare emit finish event
    }, secondWaitingBeforeSetCursor);
  }

  /**
   *  Prepare emit finish event
   */
  prepareEmitFinishEvent(): void {
    const secondWaitingBeforeEmitFinishEvent = 2000;

    setTimeout(() => {
      this.flickerScreenFinishEvent.emit();
    }, secondWaitingBeforeEmitFinishEvent);
  }
}
