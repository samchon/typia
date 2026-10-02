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
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must remove weak collection fields but retain strong Set/Map member forms and ordinary data.
 * @evidence contracts/testing.md#independent-expectations Handwritten remaining shapes and strong collection/array-entry unions establish reconstructible input meaning independently of the alias.
 * @evidence contracts/testing.md#distinguishing-cases WeakSet/WeakMap versus Set/Map are adjacent structural twins, and retained id data prevents blanket object deletion.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks ClassifiableWeakMemberCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
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
