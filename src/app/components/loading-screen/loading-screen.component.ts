import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass'],
})
export class LoadingScreenComponent implements OnInit {
  @Output() loadingFinishEvent = new EventEmitter<void>();

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Starting Win XP...");
  }

  /**
   * When image loaded finish, wait for specific second to send
   * the event loading finish done
   * @param event
   */
  onImgLoaded(event: Event): void {
    const secondToWaitingBeforeEmitEvent = 2000;

    setTimeout(() => {
      this.loadingFinishEvent.emit();
    }, secondToWaitingBeforeEmitEvent);
  }
}
