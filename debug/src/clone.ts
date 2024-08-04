import typia from "typia";

export type ConstantAtomicUnion = ConstantAtomicUnion.Union[];
export namespace ConstantAtomicUnion {
  export type Union = false | 1 | 2 | "three" | "four" | { key: "key" };
}
typia.misc.createClone<ConstantAtomicUnion>();

// export type ConstantAtomicUnion = ConstantAtomicUnion.Union[];
// export namespace ConstantAtomicUnion {
//   export type Union =
//     | false
//     | 1
//     | 2
//     | "three"
//     | "four"
//     | { key: "key" };
// }
