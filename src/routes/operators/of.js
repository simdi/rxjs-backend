import express from "express";
import { of } from "rxjs";

const opOf = express.Router();

opOf.route('/').get(async (req, res, next) => {
  const source = of(1, 'mike', true, 4, { country: 'German' });
  source.subscribe(val => console.log(val));
});

export default opOf;