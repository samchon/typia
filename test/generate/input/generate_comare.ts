import { assert } from "console";
import typia from "typia";

interface ISomething {
  id: string;
  age: number;
}

export const objects = typia.compare.equals<ISomething>(
  { id: "1", age: 2 },
  { id: "1", age: 2 },
);

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
  typia.compare.equals(new Set([1]), new Set([1])),
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

export const arrayMegaUnioun = typia.compare.equals(megaUnion(), megaUnion());
console.assert(arrayMegaUnioun, megaUnion.name);

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

// export const sets = typia.compare.equals(
//   new Set([{ foo: 1 }]),
//   new Set([{ foo: 1 }]),
// );
//
// export enum LanguageCode {
//   Arabic = "ar",
//   ChineseSimp = "zh-Hans",
//   ChineseTrad = "zh-Hant",
//   English = "en",
//   French = "fr",
//   German = "de",
//   Japanese = "ja",
//   Korean = "ko", // <-- this line
//   Portuguese = "pt",
//   Russian = "ru",
// }
//
// export type DynamicEnumeration = {
//   [P in LanguageCode]?: string;
// };
//
// export const dyn = typia.compare.equals<DynamicEnumeration>({}, {});
