import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() {}

  playAudio(src: string) {

    // Play audio
    const audio = new Audio(src);
    audio.play();

    // Remove when finish
    audio.onended = () =>{
      audio.remove();
    }
  }
}
