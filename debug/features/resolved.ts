import typia, { Resolved } from "typia";

class Foo1 {
  private _y: string;
  constructor(public readonly x: string) {
    this._y = "y";
  }
}
console.log(typia.createEquals<Resolved<Foo1>>().toString());
