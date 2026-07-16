import { CamelCase, KebabCase, PascalCase, SnakeCase } from "@typia/interface";

/**
 * Verifies every notation alias preserves readonly container structure.
 *
 * The four aliases share the same container decision tree. This matrix pins one
 * common contract: recursive key conversion changes member shapes, while
 * array/tuple/set/map mutability and optional or rest tuple positions do not
 * change.
 *
 * 1. Convert one array/tuple/set/map composite in every notation.
 * 2. Pin optional-only tuples and mutable sets/maps separately.
 * 3. Keep the transformed nested member keys specific to each naming family.
 */
export type NotationReadonlyContainerCases = [
  Assert<
    IsEqual<
      CamelCase<ReadonlyContainers<SnakeItem>>,
      ReadonlyContainers<CamelItem>
    >
  >,
  Assert<
    IsEqual<
      PascalCase<ReadonlyContainers<SnakeItem>>,
      ReadonlyContainers<PascalItem>
    >
  >,
  Assert<
    IsEqual<
      SnakeCase<ReadonlyContainers<CamelItem>>,
      ReadonlyContainers<SnakeItem>
    >
  >,
  Assert<
    IsEqual<
      KebabCase<ReadonlyContainers<CamelItem>>,
      ReadonlyContainers<KebabItem>
    >
  >,
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

type ReadonlyContainers<T> = readonly [
  readonly T[],
  readonly [T, T?, ...T[]],
  ReadonlySet<T>,
  ReadonlyMap<T, T>,
];

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
