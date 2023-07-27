import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, mergeMap, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustompreloadingService implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      if (route.data['delay']) {
        return timer(9000).pipe(mergeMap(() => load()));
      }
      return load();
    }

    return of(null);
  }
}
