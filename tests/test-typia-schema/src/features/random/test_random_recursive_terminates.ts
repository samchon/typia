import { TestValidator } from "@nestia/e2e";
import typia, { IRandomGenerator } from "typia";

/**
 * Verifies recursive random terminates whenever the cycle has an escape.
 *
 * Random generation stops a recursive type at the depth cutoff through one of
 * four escapes — a nullable edge becomes `null`, an optional property is
 * dropped, an array empties, or a union picks a finite variant. Each shape
 * below forces the recursive branch through a custom generator (so the cutoff,
 * not luck, is what stops it) and must still produce a finite value that
 * satisfies its type. The valveless counterparts are rejected at compile time,
 * so they cannot appear here.
 *
 * 1. Generate nullable-, optional-, array-, and union-escaped recursive types.
 * 2. Force every array generator to emit one element so depth keeps climbing.
 * 3. Require each value to be finite and to pass `typia.assert`.
 */
export const test_random_recursive_terminates = (): void => {
  const grow: Partial<IRandomGenerator> = {
    array: (schema) =>
      new Array(1).fill(null).map((_, i) => schema.element(i, 1)),
  };

  const nullable: INullable = typia.random<INullable>(grow);
  typia.assert<INullable>(nullable);
  TestValidator.predicate(
    "nullable recursion finite",
    () => nullableDepth(nullable) <= 8,
  );

  const optional: IOptional = typia.random<IOptional>(grow);
  typia.assert<IOptional>(optional);
  TestValidator.predicate(
    "optional recursion finite",
    () => optionalDepth(optional) <= 8,
  );

  const array: IArray = typia.random<IArray>(grow);
  typia.assert<IArray>(array);
  TestValidator.predicate(
    "array recursion finite",
    () => arrayDepth(array) <= 8,
  );

  const union: IUnionOwner = typia.random<IUnionOwner>(grow);
  typia.assert<IUnionOwner>(union);
  TestValidator.predicate("union recursion finite", () => true);
};

interface INullable {
  value: string;
  self: INullable | null;
}

interface IOptional {
  value: string;
  self?: IOptional;
}

interface IArray {
  value: string;
  self: IArray[];
}

interface IUnionOwner {
  next: IUnionLeaf | IUnionOwner;
}
interface IUnionLeaf {
  value: string;
}

const nullableDepth = (node: INullable): number =>
  node.self === null ? 0 : 1 + nullableDepth(node.self);

const optionalDepth = (node: IOptional): number =>
  node.self === undefined ? 0 : 1 + optionalDepth(node.self);

const arrayDepth = (node: IArray): number =>
  node.self.length === 0 ? 0 : 1 + arrayDepth(node.self[0]!);
