export class Matrix {
  #cols = null;
  #rows = null;
  #data = null;

  constructor(data) {
    this.#data = data;
    this.#cols = data.length;
    this.#rows = data[0].length;
  }

  getCols() {
    return this.#cols;
  }

  getRows() {
    return this.#rows;
  }

  getData() {
    return this.#data;
  }

  print() {
    console.log(this.#data);
  }
}
