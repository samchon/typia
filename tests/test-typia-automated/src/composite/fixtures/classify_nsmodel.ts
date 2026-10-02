export namespace NS {
  export class Point {
    private constructor(
      public readonly x: number,
      public readonly y: number,
    ) {}
    static from(seed: { x: number; y: number }): NS.Point {
      return new NS.Point(seed.x, seed.y);
    }
    sum(): number {
      return this.x + this.y;
    }
  }
  export class Model {
    id!: number;
    greet(): string {
      return "m" + this.id;
    }
  }
}
