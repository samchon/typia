import type { StandardSchemaV1 as Spec } from "@standard-schema/spec";
import { StandardSchemaV1 } from "@typia/interface";

/**
 * Verifies `StandardSchemaV1` still matches the specification it was copied
 * from.
 *
 * `@typia/interface` declares the Standard Schema contract in-house so that
 * nothing typia puts in a public signature belongs to another package — a
 * borrowed name is not nameable from a consumer compiling with `declaration:
 * true` under an isolated `node_modules` layout (samchon/typia#2359). The cost
 * of owning the declaration is that it can drift from the specification
 * silently, and drift is invisible until some third-party library rejects a
 * `typia.createValidate` result at a boundary the repository never compiles.
 *
 * `@standard-schema/spec` therefore stays a development dependency, and this
 * file is what it is for. Assignability runs in both directions on purpose: one
 * direction alone passes while the specification grows a member.
 *
 * 1. Assert the two interfaces accept each other, generic and defaulted.
 * 2. Assert the same for every member of the namespace.
 * 3. Assert the inference helpers read back the type arguments.
 */
export type StandardSchemaV1ConformanceCases = [
  // the interface itself
  Assert<Mutual<StandardSchemaV1, Spec>>,
  Assert<Mutual<StandardSchemaV1<IInput>, Spec<IInput>>>,
  Assert<Mutual<StandardSchemaV1<IInput, IOutput>, Spec<IInput, IOutput>>>,

  // the properties carried under `~standard`
  Assert<Mutual<StandardSchemaV1.Props, Spec.Props>>,
  Assert<
    Mutual<StandardSchemaV1.Props<IInput, IOutput>, Spec.Props<IInput, IOutput>>
  >,
  Assert<Mutual<StandardSchemaV1.Options, Spec.Options>>,

  // the validation result union and its two arms
  Assert<Mutual<StandardSchemaV1.Result<IOutput>, Spec.Result<IOutput>>>,
  Assert<
    Mutual<StandardSchemaV1.SuccessResult<IOutput>, Spec.SuccessResult<IOutput>>
  >,
  Assert<Mutual<StandardSchemaV1.FailureResult, Spec.FailureResult>>,
  Assert<Mutual<StandardSchemaV1.Issue, Spec.Issue>>,
  Assert<Mutual<StandardSchemaV1.PathSegment, Spec.PathSegment>>,

  // the phantom type carrier
  Assert<Mutual<StandardSchemaV1.Types, Spec.Types>>,
  Assert<
    Mutual<StandardSchemaV1.Types<IInput, IOutput>, Spec.Types<IInput, IOutput>>
  >,

  // the inference helpers
  Assert<
    IsEqual<
      StandardSchemaV1.InferInput<StandardSchemaV1<IInput, IOutput>>,
      IInput
    >
  >,
  Assert<
    IsEqual<
      StandardSchemaV1.InferOutput<StandardSchemaV1<IInput, IOutput>>,
      IOutput
    >
  >,
];

interface IInput {
  value: string;
}

interface IOutput {
  value: number;
}

type Assert<T extends true> = T;

/**
 * Assignable in both directions, which is what interoperability needs.
 *
 * The tuple wrappers stop the conditional from distributing: `Result` is a
 * union, and a distributed comparison asks whether each arm alone satisfies the
 * whole union, which answers `boolean` for a pair that matches exactly.
 */
type Mutual<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
