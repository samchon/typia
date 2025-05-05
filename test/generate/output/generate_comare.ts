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
console.assert(
  (() => {
    return (a: Map<string, number>, b: Map<string, number>): boolean => {
      return (
        a === b ||
        (a.size === b.size &&
          (() => {
            const a1 = Array.from(a.values());
            const b1 = Array.from(b.values());
            return (
              a1 === b1 ||
              (a1.length === b1.length &&
                a1.every((item: any, index_1: any) => {
                  return item === (b1 as any)[index_1]!;
                }))
            );
          })())
      );
    };
  })()(new Map([["foo", 1]]), new Map([["foo", 1]])),
  "Map compares should be equal",
);
console.assert(
  (() => {
    return (
      a: Set<(string | number)[]>,
      b: Set<(string | number)[]>,
    ): boolean => {
      return (
        a === b ||
        (a.size === b.size &&
          (() => {
            const a1 = Array.from(a.values());
            const b1 = Array.from(b.values());
            return (
              a1 === b1 ||
              (a1.length === b1.length &&
                a1.every((item: any, index_2: any) => {
                  return (
                    item === (b1 as any)[index_2]! ||
                    (item.length === (b1 as any)[index_2]!.length &&
                      item.every((item: any, index_3: any) => {
                        return (
                          item === ((b1 as any)[index_2]! as any)[index_3]!
                        );
                      }))
                  );
                }))
            );
          })())
      );
    };
  })()(new Set([["foo", 1]]), new Set([["foo", 1]])),
  "Set compares should be equal",
);
