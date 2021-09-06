import express from "express";
import axios from "axios";
import { from } from "rxjs";

const opFrom = express.Router();

opFrom.route('/').get(async (req, res, next) => {
  await axios.get("https://swapi.dev/api/people").then((result) => {
    const array = from(result.data.results);
    array.subscribe((val) => console.log(val));
  });
});

export default opFrom;