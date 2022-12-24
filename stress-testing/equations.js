import { mul, randomData } from "./matrix/operations.js";
import { Matrix } from "./matrix/Matrix.js";

export const solve = () => {
  let matrices = [];

  for (let i = 0; i < 100; i++) {
    matrices.push(new Matrix(randomData(100, 100)));
  }
  const res = matrices.reduce((acc, curr) => {
    return mul(acc, curr);
  });
  return res.getData();
};
