import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public firstParam: any;
  public title = 'electro-janusz';

  constructor(private electronService: ElectronService) {}

  public ngOnInit(): void {
    console.log('PARAMS FROM ANGULAR : ', this.electronService.process.argv);
    this.firstParam = this.electronService.process.argv[1];
  }

  public printParams(): void{
    console.log('electronService: ', this.electronService);
    console.log('PARAMS FROM ANGULAR : ', this.electronService.process.argv);
  }
}
