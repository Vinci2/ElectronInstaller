import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

import { HomeStateService } from '../../services/home-state.service';

@Component({
  selector: 'app-home-main-container',
  templateUrl: './home-main-container.component.html',
  styleUrls: ['./home-main-container.component.scss']
})
export class HomeMainContainerComponent implements OnInit {
  public path$: Observable<string>;
  public fetchingPath$: Observable<boolean>;
  public installing$: Observable<boolean>;

  constructor(private electronService: ElectronService, private homeStateService: HomeStateService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.path$ = this.homeStateService.path$;
    this.fetchingPath$ = this.homeStateService.fetchingPath$;
    this.installing$ = this.homeStateService.installing$;

    this.homeStateService.fetchPath();
    this.electronService.ipcRenderer.on('selectedPath', (event, data) => {
      this.homeStateService.setPath(data);
      this.cd.detectChanges();
    });
  }

  public onOpenDialog() {
    this.electronService.ipcRenderer.send('openDialog', 'message');
  }

  public onInputChange(event: string) {
    this.homeStateService.setPath(event);
  }

  public onInstall() {
    this.homeStateService.install();
  }
}
