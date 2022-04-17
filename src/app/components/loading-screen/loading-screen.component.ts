import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MouseService } from '../../services/mouse.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass'],
})
export class LoadingScreenComponent implements OnInit {
  @Output() loadingFinishEvent = new EventEmitter<void>();

  constructor(
    private titleService: Title,
    private mouseService: MouseService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Starting Win XP...');
    this.mouseService.hideCursor(); // Hide cursor
  }

  /**
   * When image loaded finish, wait for specific second to send
   * the event loading finish done
   * @param event
   */
  onImgLoaded(event: Event): void {
    const secondToWaitingBeforeEmitEvent = 3000;

    setTimeout(() => {
      this.loadingFinishEvent.emit();
    }, secondToWaitingBeforeEmitEvent);
  }
}
