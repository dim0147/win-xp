import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-init-screen',
  templateUrl: './init-screen.component.html',
  styleUrls: ['./init-screen.component.sass']
})
export class InitScreenComponent implements OnInit {

  @Output() onClickBtnEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  async onClick(): Promise<void> {
    const result = await document.documentElement.requestFullscreen().catch(() => null);
    this.onClickBtnEvent.emit();
  }

}
