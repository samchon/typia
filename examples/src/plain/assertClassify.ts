import typia from "typia";

class User {
  /** @format uuid */
  id!: string;

  /** @minLength 3 */
  name!: string;

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

// A value object built through its own static factory.
class Point {
  private constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}
  static from(seed: { x: number; y: number }): Point {
    return new Point(seed.x, seed.y);
  }
  norm(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Instance type: field-copy plain data back onto the prototype, after
// validating it matches User. `plain` could be a JSON.parse result.
const plain = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "Samchon",
};
const user: User = typia.plain.assertClassify<User>(plain);
console.log(user instanceof User, user.greet());

// Class type: build through the static factory from its seed.
const point: Point = typia.plain.classify<typeof Point>({ x: 3, y: 4 });
console.log(point instanceof Point, point.norm());
