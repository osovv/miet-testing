import { Matrix } from "./Matrix.js";

export function mul(a, b) {
  const aData = a.getData().slice();
  const bData = a.getData().slice();
  const newSizeRow = a.getRows();
  const newSizeCol = b.getCols();

  const res = [];

  for (let i = 0; i < newSizeRow; i++) {
    res.push([]);
    for (let j = 0; j < newSizeCol; j++) {
      for (let k = 0; k < newSizeCol; k++) {
        res[i][j] = aData[i][k] + bData[k][j];
      }
    }
  }

  return new Matrix(res);
}

export const randomData = (row, col) => {
  const res = [];

  for (let i = 0; i < row; i++) {
    res.push([]);
    for (let j = 0; j < col; j++) {
      res[i].push(Math.floor(Math.random() * 10));
    }
  }
  return res;
};
