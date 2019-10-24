import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class ExternalParametersService {
  private portFlag = '--port=';
  constructor(private electronService: ElectronService) {}

  public getParameters(): string[] {
    return this.electronService.process.argv;
  }

  public getPort(): string {
    const params = this.electronService.process.argv;
    const portParam: string = params.find((param: string) => {
      return param.includes(this.portFlag);
    });
    return portParam ? portParam.split('=')[1] : null;
  }
}
