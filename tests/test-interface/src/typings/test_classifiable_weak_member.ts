import { Classifiable } from "@typia/interface";

/**
 * Verifies a `WeakSet`/`WeakMap` member is dropped, while `Set`/`Map` survive.
 *
 * Pins the key-remap's weak-collection rule: a `WeakSet`/`WeakMap` member
 * cannot be rebuilt from plain data, so its key is dropped entirely (rather
 * than left as a `never`-valued, unsatisfiable property). Because a real
 * `Set`/`Map` is structurally _wider_ than its weak counterpart (`Set extends
 * WeakSet`), the remap must match and keep `Set`/`Map` first, otherwise it
 * would wrongly drop them too.
 *
 * 1. A class's `WeakSet`/`WeakMap` members vanish from the classified shape.
 * 2. A class's `Set`/`Map` members are kept and classified (array form allowed).
 * 3. The remaining data property survives unchanged.
 */
export type ClassifiableWeakMemberCases = [
  Assert<IsEqual<Classifiable<WithWeak>, { id: number }>>,
  Assert<
    IsEqual<
      Classifiable<WithCollections>,
      {
        tags: Set<string> | string[];
        pairs: Map<string, number> | [string, number][];
      }
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

class WithWeak {
  id!: number;
  cacheSet!: WeakSet<object>;
  cacheMap!: WeakMap<object, number>;
}

class WithCollections {
  tags!: Set<string>;
  pairs!: Map<string, number>;
}
