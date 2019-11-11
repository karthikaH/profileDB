import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

import artRouter from "./resources/art/art.router";

export const app = express();
const port = 3000;

// a middleware func to enable CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

// morgon is a middleware that helps to log various things to console
app.use(morgan("dev"));

app.use("/api/art", artRouter);

export const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (e) {
    console.error(e);
  }
};
