import { parentPort, threadId, workerData } from "worker_threads";
import { solve } from "./equations.js";

// Тут, асинхронно, не блокируя главный поток,
// можно выполнять тяжёлые вычисления.
solve();
parentPort.postMessage({ done: true, id: threadId });
