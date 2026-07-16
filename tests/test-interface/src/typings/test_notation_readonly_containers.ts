import { CamelCase, KebabCase, PascalCase, SnakeCase } from "@typia/interface";

/**
 * Verifies every notation alias preserves readonly container structure.
 *
 * The four aliases share the same mutable-only container decision. This matrix
 * pins one common contract: recursive key conversion changes member shapes,
 * while array/tuple/set/map mutability and optional or rest tuple positions do
 * not change.
 *
 * 1. Convert readonly arrays and optional/rest tuples in every notation.
 * 2. Convert readonly sets and maps in every notation.
 * 3. Keep the transformed nested member keys specific to each naming family.
 */
export type NotationReadonlyContainerCases = [
  Assert<IsEqual<CamelCase<readonly SnakeItem[]>, readonly CamelItem[]>>,
  Assert<IsEqual<PascalCase<readonly [SnakeItem?]>, readonly [PascalItem?]>>,
  Assert<
    IsEqual<
      PascalCase<readonly [SnakeItem, SnakeItem?, ...SnakeItem[]]>,
      readonly [PascalItem, PascalItem?, ...PascalItem[]]
    >
  >,
  Assert<IsEqual<SnakeCase<ReadonlySet<CamelItem>>, ReadonlySet<SnakeItem>>>,
  Assert<
    IsEqual<
      KebabCase<ReadonlyMap<CamelItem, CamelItem>>,
      ReadonlyMap<KebabItem, KebabItem>
    >
  >,
  Assert<IsEqual<CamelCase<Set<SnakeItem>>, Set<CamelItem>>>,
  Assert<
    IsEqual<SnakeCase<Map<CamelItem, CamelItem>>, Map<SnakeItem, SnakeItem>>
  >,
];

interface SnakeItem {
  item_id: number;
}
interface CamelItem {
  itemId: number;
}
interface PascalItem {
  ItemId: number;
}
interface KebabItem {
  "item-id": number;
}

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
