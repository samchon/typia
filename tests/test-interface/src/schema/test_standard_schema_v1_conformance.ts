import type { StandardSchemaV1 as Spec } from "@standard-schema/spec";
import { StandardSchemaV1 } from "@typia/interface";

/**
 * Verifies `StandardSchemaV1` is identical to the specification it was copied
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
 * file is what it is for. The bar is type identity rather than mutual
 * assignability, because assignability is too weak to pin a copy: adding an
 * optional member to this side, or dropping a `readonly` modifier, leaves both
 * directions assignable and would sail through. Both were measured against the
 * assignability form and passed it; identity rejects them and still accepts the
 * declaration as written.
 *
 * 1. Assert the two interfaces are identical, generic and defaulted.
 * 2. Assert the same for every member of the namespace.
 * 3. Assert the inference helpers read back the type arguments.
 *
 * @evidence contracts/testing.md#behavioral-verification Every selected StandardSchemaV1 namespace member must be identical to the upstream specification and inference helpers must read the authored generic input/output.
 * @evidence contracts/testing.md#independent-expectations The installed @standard-schema/spec declarations independently establish the copied contract. Symmetric generic-function identity distinguishes optional/readonly drift that mutual assignability can forgive.
 * @evidence contracts/testing.md#distinguishing-cases Default/one/two type arguments, Props/Options, result arms/issues/path segments, phantom carriers and distinct input/output inference cover each declared conformance owner.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only StandardSchemaV1ConformanceCases declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export type StandardSchemaV1ConformanceCases = [
  // the interface itself
  Assert<IsEqual<StandardSchemaV1, Spec>>,
  Assert<IsEqual<StandardSchemaV1<IInput>, Spec<IInput>>>,
  Assert<IsEqual<StandardSchemaV1<IInput, IOutput>, Spec<IInput, IOutput>>>,

  // the properties carried under `~standard`
  Assert<IsEqual<StandardSchemaV1.Props, Spec.Props>>,
  Assert<
    IsEqual<
      StandardSchemaV1.Props<IInput, IOutput>,
      Spec.Props<IInput, IOutput>
    >
  >,
  Assert<IsEqual<StandardSchemaV1.Options, Spec.Options>>,

  // the validation result union and its two arms
  Assert<IsEqual<StandardSchemaV1.Result<IOutput>, Spec.Result<IOutput>>>,
  Assert<
    IsEqual<
      StandardSchemaV1.SuccessResult<IOutput>,
      Spec.SuccessResult<IOutput>
    >
  >,
  Assert<IsEqual<StandardSchemaV1.FailureResult, Spec.FailureResult>>,
  Assert<IsEqual<StandardSchemaV1.Issue, Spec.Issue>>,
  Assert<IsEqual<StandardSchemaV1.PathSegment, Spec.PathSegment>>,

  // the phantom type carrier
  Assert<IsEqual<StandardSchemaV1.Types, Spec.Types>>,
  Assert<
    IsEqual<
      StandardSchemaV1.Types<IInput, IOutput>,
      Spec.Types<IInput, IOutput>
    >
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
 * True only when `X` and `Y` are the same type, not merely interchangeable.
 *
 * The deferred conditional inside a generic function signature makes TypeScript
 * compare the pair by identity, which is what separates this from an `extends`
 * pair: identity sees an optionality or `readonly` difference that
 * assignability forgives.
 */
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
