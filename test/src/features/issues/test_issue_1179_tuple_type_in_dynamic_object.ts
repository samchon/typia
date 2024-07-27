import typia from "typia";

export const test_issue_1179_tuple_type_in_dynamic_object = (): void => {
  const foo: Foo = typia.random<Foo>();
  typia.assert(foo);

  const bar: Foo = {
    paths: {
      "/": ["home"],
      "/about": ["about"],
    },
  };
  typia.assert(bar);
};

interface Foo {
  paths?: {
    [from: string]: [string];
  };
}
