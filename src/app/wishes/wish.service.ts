import { Injectable} from "@angular/core"
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Wish } from './wish';
import 'rxjs/Rx';

@Injectable()
export class WishService{

    private endpoint_url:string = "http://troelslenda.com/api/agnes-wishes";
    constructor (private http: Http) {}

    getWishes(): Observable<Wish[]> {
        return this.http.get(this.endpoint_url).map(res => res.json() as Wish[])
    }
}
