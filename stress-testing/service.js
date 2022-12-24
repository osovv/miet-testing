import { parentPort, threadId, workerData } from "worker_threads";
import { solve } from "./equations.js";

// Тут, асинхронно, не блокируя главный поток,
// можно выполнять тяжёлые вычисления.
const func = async () => {
  const res = solve();
  parentPort.postMessage({ res, id: threadId });
};

await func();
