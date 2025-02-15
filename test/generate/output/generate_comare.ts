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
export const arrays = (() => {
  return (a: number[], b: number[]): boolean => {
    return (
      a === b ||
      (a.length === b.length &&
        a.every((item: any, index: any) => {
          return item === (b as any)[index]!;
        }))
    );
  };
})()([1, 2, 3], [1, 2, 3]);
export const tuple = (() => {
  return (
    a: [number, string, { foo: string; bar?: string }],
    b: [number, string, { foo: string; bar?: string }],
  ): boolean => {
    return (
      a === b ||
      (a[0] === b[0] &&
        a[1] === b[1] &&
        (a[2] === b[2] || (a[2].foo === b[2].foo && a[2]?.bar === b[2]?.bar)))
    );
  };
})()(
  [1, "foo", { foo: "bar", bar: "baz" }],
  [1, "foo", { foo: "bar", bar: "baz" }],
);
export const nested = (() => {
  return (
    a: { id: number; items: { name: string }[] },
    b: { id: number; items: { name: string }[] },
  ): boolean => {
    return (
      a === b ||
      (a.id === b.id &&
        (a.items === b.items ||
          (a.items.length === b.items.length &&
            a.items.every((item: any, index: any) => {
              return (
                item === (b.items as any)[index]! ||
                item.name === (b.items as any)[index]!.name
              );
            }))))
    );
  };
})()({ id: 1, items: [{ name: "foo" }] }, { id: 1, items: [{ name: "foo" }] });
export const union = (() => {
  return (a: (string | number)[], b: (string | number)[]): boolean => {
    return (
      a === b ||
      (a.length === b.length &&
        a.every((item: any, index: any) => {
          return item === (b as any)[index]! || item === (b as any)[index]!;
        }))
    );
  };
})()([1], [1]);
export const unionNested = (() => {
  return (
    a: ({ foo: string } | { bar: number })[],
    b: ({ foo: string } | { bar: number })[],
  ): boolean => {
    return (
      a === b ||
      (a.length === b.length &&
        a.every((item: any, index: any) => {
          return (
            item === (b as any)[index]! ||
            item === (b as any)[index]! ||
            item.foo === (b as any)[index]!.foo ||
            item === (b as any)[index]! ||
            item.bar === (b as any)[index]!.bar
          );
        }))
    );
  };
})()([{ foo: "1" }], [{ foo: "1" }]);
