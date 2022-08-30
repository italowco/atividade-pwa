
import {db} from "./database";


export function readAll(req, res) {

  res.status(200).json({products:db.readAll()});

}

export function readAllCategories(req, res) {

  res.status(200).json({products:db.readCategories()});

}

