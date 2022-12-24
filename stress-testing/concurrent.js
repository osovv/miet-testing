// https://habr.com/ru/company/ruvds/blog/437984/

import { Worker } from "worker_threads";
import { solve } from "./equations.js";

// const { Worker, threadId } = require("worker_threads");
// const { solve } = require("equations");

function runService() {
  const arr = new Array(4)
    .fill()
    .map(
      () =>
        new Worker("./service.js", { workerData: { func: solve.toString() } })
    );
  arr.forEach((worker) => {
    worker.on("message", (value) => console.log(value));
    worker.on("error", (value) => console.error(value));
    worker.on("exit", (code) => {
      if (code !== 0) console.error("err");
    });
  });
}

runService();
