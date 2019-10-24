import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { HomeHttpService } from './home-http.service';
import { take } from 'rxjs/operators';

@Injectable()
export class HomeStateService {
    private path: string = null;
    private fetchingPath = false;
    private installing = false;
    public path$ = new BehaviorSubject(this.path);
    public fetchingPath$ = new BehaviorSubject(this.fetchingPath);
    public installing$ = new BehaviorSubject(this.installing);

    constructor(private homeHttpService: HomeHttpService) {}

    public setPath(newPath: string): void {
        this.path = newPath;
        this.path$.next(this.path);
    }

    public fetchPath(): void {
        this.fetchingPath = true;
        this.fetchingPath$.next(this.fetchingPath);
        this.homeHttpService.fetchPath().pipe(take(1)).subscribe((path) => {
            this.path = path;
            this.fetchingPath = false;
            this.path$.next(this.path);
            this.fetchingPath$.next(this.fetchingPath);
        });
    }

    public install(): void {
        this.installing = true;
        this.installing$.next(this.installing);

        this.homeHttpService.install(this.path).pipe(take(1)).subscribe(() => {
            this.installing = false;
            this.installing$.next(this.installing);
        });
    }

    // public getPath(): Observable<string> {
    //     return 

    // }


}