export class SimpleClass {
  constructor(
    public name: string,
    public value: number,
  ) {}

  getData() {
    return { name: this.name, value: this.value };
  }
}

export namespace SimpleClass {
  export function generate(): SimpleClass {
    return new SimpleClass("test", 42);
  }
}