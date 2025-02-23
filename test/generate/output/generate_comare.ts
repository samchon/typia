import { assert } from "console";
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
// export const matrix = typia.compare.equals<number[][][]>(
//   [[[1, 2, 3]]],
//   [[[1, 2, 3]]],
// );
// export const matrix = typia.compare.equals<number[][]>(
//   [[1, 2, 3]],
//   [[1, 2, 3]],
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
// export type Union = false | 1 | 2 | "three" | "four" | { key: "key" };
// export function union(): Union[] {
//   return [false, 1, 2, "three", "four", { key: "key" }];
// }
// export const arrayUnioun = typia.compare.equals(union(), union());
// console.assert(arrayUnioun, union.name);
//
// typia.compare.equals([{ a: 1 }], [{ a: 1 }]);
console.assert(
  (() => {
    return (a: Set<number>, b: Set<number>): boolean => {
      return (
        a === b ||
        (a.size === b.size &&
          Array.from(a.values()).every((item: any, index_1: any) => {
            return item === (b as any)[index_1]!;
          }))
      );
    };
  })()(new Set([1]), new Set([1])),
  "Set compares should be equal",
);
export type MegaUnion =
  | number
  | Uint8Array
  | Set<boolean>
  | Map<any, any>
  | [string, string]
  | [boolean, number, number]
  | number[]
  | boolean[]
  | [];
export function megaUnion(): MegaUnion[] {
  return [
    3,
    // new Uint8Array(),
    new Set([false, true]),
    // new Map(),
    // ["one", "two"],
    // [false, 1, 2],
    // [1, 2, 3],
    // [true, false],
    // [],
  ];
}
export const arrayMegaUnioun = (() => {
  return (a: MegaUnion[], b: MegaUnion[]): boolean => {
    return (
      a === b ||
      (a.length === b.length &&
        a.every((item: any, index_2: any) => {
          return (
            item === (b as any)[index_2]! ||
            (item instanceof Map &&
              (item === (b as any)[index_2]! ||
                (item.size === (b as any)[index_2]!.size &&
                  Array.from(item.values()).every((item: any, index_3: any) => {
                    return item === ((b as any)[index_2]! as any)[index_3]!;
                  })))) ||
            (item instanceof Map &&
              (item === (b as any)[index_2]! ||
                (item.size === (b as any)[index_2]!.size &&
                  Array.from(item.values()).every((item: any, index_4: any) => {
                    return item === ((b as any)[index_2]! as any)[index_4]!;
                  })))) ||
            (Array.isArray(item) &&
              (item === (b as any)[index_2]! ||
                (item.length === (b as any)[index_2]!.length &&
                  item.every((item: any, index_5: any) => {
                    return item === ((b as any)[index_2]! as any)[index_5]!;
                  })) ||
                item === (b as any)[index_2]! ||
                (item.length === (b as any)[index_2]!.length &&
                  item.every((item: any, index_6: any) => {
                    return item === ((b as any)[index_2]! as any)[index_6]!;
                  }))))
          );
        }))
    );
  };
})()(megaUnion(), megaUnion());
console.assert(arrayMegaUnioun, megaUnion.name);
