import typia from "typia";

interface ISomething {
  id: string;
  age: number;
}
export const objects = (() => {
  return (a: ISomething, b: ISomething): boolean => {
    return a === b || (a.id === b.id && a.age === b.age);
  };
})()({ id: "1", age: 2 }, { id: "1", age: 2 });
//
// export const matrix = typia.compare.equals<number[][][]>(
//   [[[1, 2, 3]]],
//   [[[1, 2, 3]]],
// );
// interface ICategory {
//   children: ICategory[];
//   id: number;
//   code: string;
//   sequence: number;
// }
// export const recurcive = typia.compare.equals<ICategory>(1 as any, 1 as any);
// export const arrays = typia.compare.equals<number[]>([1, 2, 3], [1, 2, 3]);
// export const tuple = typia.compare.equals<
//   [number, string, { foo: string; bar?: string }]
// >(
//   [1, "foo", { foo: "bar", bar: "baz" }],
//   [1, "foo", { foo: "bar", bar: "baz" }],
// );
//
// export const nested = typia.compare.equals<{
//   id: number;
//   items: Array<{ name: string }>;
// }>({ id: 1, items: [{ name: "foo" }] }, { id: 1, items: [{ name: "foo" }] });
//
// export const union = typia.compare.equals<Array<string | number>>([1], [1]);
// export const unionNested = typia.compare.equals<
//   Array<{ foo: string } | { bar: number }>
// >([{ foo: "1" }], [{ foo: "1" }]);
// type SpecificKeys = {
//   "foo-bar-baz": number;
// };
// export const specificKeys = typia.compare.equals<SpecificKeys>(
//   { "foo-bar-baz": 1 },
//   { "foo-bar-baz": 2 },
// );
// class FooClass {
//   foo: string = "";
//   method() {}
// }
//
// export const fooClass = typia.compare.equals(new FooClass(), new FooClass());
//
// export const fooNestedClass = typia.compare.equals(
//   { foo: new FooClass() },
//   { foo: new FooClass() },
// );
export const sets = (() => {
  return (a: Set<{ foo: number }>, b: Set<{ foo: number }>): boolean => {
    return (
      a === b ||
      (a.size === b.size &&
        Array.from(a.values()).every((item: any, index: any) => {
          return (
            item === (b as any)[index]! || item.foo === (b as any)[index]!.foo
          );
        }))
    );
  };
})()(new Set([{ foo: 1 }]), new Set([{ foo: 1 }]));
