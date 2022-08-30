
import * as _ from 'lodash';
import {PRODUCTS, CATERORIES} from "./database-data";


class InMemoryDatabase {

    readAll() {
        return _.values(PRODUCTS);
    }

    readCategories() {
      return _.values(CATERORIES);
  }

}




export const db = new InMemoryDatabase();


