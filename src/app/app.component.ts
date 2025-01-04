import { AudioService } from './services/audio.service';
import { Component, OnInit } from '@angular/core';

type Screen =
  | 'init-screen'
  | 'boot-loading'
  | 'flicker-screen'
  | 'welcome-screen'
  | 'desktop-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Win XP';
  screen: Screen = 'init-screen';
  welcomeScreenImgLoadFinish: boolean = false;
  desktopScreenImgLoadFinish: boolean = false;
  audioService: AudioService;

  constructor(audioService: AudioService) {
    this.audioService = audioService;
  }

  ngOnInit() {}

  /**
   * Click Init Button Event
   */
  onClickBtnInitScreen(): void {
    console.log('Init Screen Done');
    this.screen = 'boot-loading'; // Set next screen
  }

  /**
   * Boot loading finish
   */
  onBootLoadingFinished(): void {
    console.log('Boot Loading Done');
    this.screen = 'flicker-screen'; // Set next screen
  }

  /**
   * Flicker screen finish
   */
  onFlickerScreenFinished(): void {
    console.log('Flicker Screen Done');
    this.audioService.playAudio("assets/Win-XP/Audio/Windows XP Startup.wav");
    this.screen = 'welcome-screen'; // Set next screen
  }

  /**
   * Welcome screen finish
   */
  onWelcomeScreenFinished(): void {
    console.log('Welcome Screen Done');
    this.screen = 'desktop-screen'; // Set next screen
  }

  /**
   * Check when screen is 'welcome-screen' but image for
   * welcome screen not load finish(still loading) we continue display flicker screen
   */
  isFlickerScreen(): boolean {
    if (this.screen === 'flicker-screen') return true;

    // Welcome's image not loading finish
    return this.screen === 'welcome-screen' && !this.welcomeScreenImgLoadFinish;
  }

  /**
   * Called when welcome screen image load finish
   */
  onWelcomeScreenImgLoadFinish(): void {
    console.log('Load Welcome Image done');
    this.welcomeScreenImgLoadFinish = true;
  }

  /**
   * Called when desktop screen image load finish
   */
  onDesktopScreenImgLoadFinish(): void {
    console.log('Load Desktop Image done');
    this.desktopScreenImgLoadFinish = true;
  }
}
