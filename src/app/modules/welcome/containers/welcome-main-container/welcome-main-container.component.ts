import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-welcome-main-container',
  templateUrl: './welcome-main-container.component.html',
  styleUrls: ['./welcome-main-container.component.scss']
})
export class WelcomeMainContainerComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  public onClose() {
    this.electronService.ipcRenderer.send('closeApp');
  }

}
