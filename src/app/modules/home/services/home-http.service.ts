import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ExternalParametersService } from 'src/app/services/external-parameters.service';

@Injectable()
export class HomeHttpService {
    private fakeFetchPath$ = of('PATH/FROM/BACKEND').pipe(delay(2000));
    private fakeInstall$ = of('Installed').pipe(delay(4000));

    constructor(private externalParametersService: ExternalParametersService, private http: HttpClient) {}

    public fetchPath(): Observable<string> {
        const FETCH_PATH_PREFIX = 'https://PATH';
        const port = this.externalParametersService.getPort();
        // example of get:  this.http.get<any>(`${environment.apiUrl}/assets/${id}/tree`);
        // for more check HttpClient Angular docs.
        console.log('PORT:', port);
        if (port) {
            return this.http.get<any>(`${FETCH_PATH_PREFIX}:${port}/postfix`);
        }
        return this.fakeFetchPath$;
    }

    public install(path: string): Observable<string> {
        const INSTALL_PATH_PREFIX = 'https://PATH';
        const port = this.externalParametersService.getPort();
        console.log('PORT:', port);
        // example of post:  this.http.post<any>(`${environment.apiUrl}/assets/${id}/tree`, {path: path});
        if (port) {
            return this.http.post<any>(`${INSTALL_PATH_PREFIX}:${port}/postfix`, {path});
        }
        return this.fakeInstall$;
    }
}
