import { DeepPartial } from "@typia/interface";

/**
 * Verifies `DeepPartial<T>` preserves mutable, readonly, and tuple array
 * shapes.
 *
 * Treating every mutable tuple as `Array<infer U>` widens its positions, while
 * a readonly array misses that branch entirely. Deep recursion must be
 * homomorphic over each array shape so optional and variadic tuple structure is
 * retained.
 *
 * 1. Recurse through mutable and readonly arrays of nested objects.
 * 2. Preserve mutable and readonly fixed tuples.
 * 3. Preserve optional and variadic tuple elements while partializing values.
 */
export type DeepPartialArrayShapeCases = [
  Assert<
    IsEqual<
      DeepPartial<Array<{ id: number; child: { name: string } }>>,
      Array<{ id?: number; child?: { name?: string } }>
    >
  >,
  Assert<
    IsEqual<
      DeepPartial<readonly { id: number; child: { name: string } }[]>,
      readonly { id?: number; child?: { name?: string } }[]
    >
  >,
  Assert<
    IsEqual<
      DeepPartial<[{ head_id: number }, { tail_id: number }?]>,
      [{ head_id?: number }, { tail_id?: number }?]
    >
  >,
  Assert<
    IsEqual<
      DeepPartial<readonly [{ head_id: number }, ...{ item_id: number }[]]>,
      readonly [{ head_id?: number }, ...{ item_id?: number }[]]
    >
  >,
];

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
