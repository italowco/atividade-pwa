
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import { environment } from "src/environments/environment";


@Injectable()
export class CategoriesService {

    url = '';

    constructor(private http: HttpClient) {
      this.url = environment.apiUrl;
    }

    loadAll() : Observable<Category[]> {
        return this.http.get<any>(`${this.url}/api/category`).pipe(map(res => {
          return res.categories;
        } ));
    }

    findById(id:number) {
        return this.http.get<Category>(`${this.url}/api/category/` + id);
    }

}

