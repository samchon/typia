import typia, { Resolved } from "typia";

export const test_issue_998_resolved_class_constructor = (): void => {
  class Foo1 {
    private _y: string;
    constructor(public readonly x: string) {
      this._y = "y";
    }
  }
  const foo: Foo1 = new Foo1("x");
  const cloned: Resolved<Foo1> = typia.misc.clone(foo);
  typia.assertEquals(cloned);
};
