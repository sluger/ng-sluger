import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JsonLoaderService {

  constructor(private http: Http) {
    }

    public loadJson(url: string): Observable<{}> {
        return this.http.get(url, {})
            .map((res) => { return res.json() })
            .catch((error) => { return error.message || 'error'; });
    }
}
