import typia from "typia";

export const test_issue_1179_tuple_type_in_dynamic_object = (): void => {
  new Array(100).forEach(() => {
    const foo: Foo = typia.random<Foo>();
    typia.assert(foo);
  });
};

interface Foo {
  paths?: {
    [from: string]: [string];
  };
}
