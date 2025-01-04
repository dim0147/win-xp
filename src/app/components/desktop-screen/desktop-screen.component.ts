import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-desktop-screen',
  templateUrl: './desktop-screen.component.html',
  styleUrls: ['./desktop-screen.component.sass'],
})
export class DesktopScreenComponent implements OnInit {
  @Input() isDesktopScreen = false;
  @Input() imgLoadFinish = false;

  @Output() imgLoadFinishEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * When image load finish, emit the vent
   * @param event
   */
  onImgLoadFinish(event: Event): void {
    this.imgLoadFinishEvent.emit();
  }

  onExit() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error('Error exiting full screen:', err);
      });
    }
  }
}
