export class Model {
  id!: number;
  greet(): string {
    return "m" + this.id;
  }
}

export class Factory {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  static from(seed: { value: number }): Factory {
    const f = Object.create(Factory.prototype) as Factory;
    (f as { value: number }).value = seed.value;
    return f;
  }
}

// default-exported field-copy class: the value import must be a DEFAULT import
export default class Memo {
  text!: string;
  show(): string {
    return this.text;
  }
}
