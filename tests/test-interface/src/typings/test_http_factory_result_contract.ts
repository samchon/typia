import type typia from "typia";

class Query {
  public x!: number;
  public twice(): number {
    return this.x * 2;
  }
}
interface IPlain {
  x: number;
}

/**
 * Verifies every HTTP factory exposes its direct form's resolved return type.
 *
 * A class-based decoder builds data rather than a class instance. Returning T
 * instead of Resolved<T> allowed callers to invoke a method that decoded data
 * does not carry. Pure interface data must retain its own structural type.
 *
 * 1. Compare all thirteen HTTP factories with their exact direct return types.
 * 2. Preserve the plain-interface result control.
 * 3. Reject method calls on four representative decoded class results.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpFactoryResultCases retains every original thirteen direct/factory Same assertion and the plain-interface identity assertion. The methodOnFactoryResult expected-error controls require Query.twice to remain noncallable on query, nullable isQuery, FormData and assertHeaders results.
 * @evidence contracts/testing.md#independent-expectations The return-type comparison uses a local deferred generic-function type-identity predicate against the public direct signatures. The Query class's authored callable method supplies four independent negative controls; a correlated wrong direct/factory class return would still fail those controls.
 * @evidence contracts/testing.md#distinguishing-cases Query/assertQuery/isQuery/validateQuery, FormData/assert/is/validate, headers/assert/is/validate and atomic parameter retain all factory signatures. The plain-interface control and nullable-is method call preserve their separate structural/nullability distinctions.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks this compile-only file with noEmit. The typia import is type-only and every factory reference is a type query; no factory executes or must be transformed. The original runtime equality checks remain in the schema-suite case.
 */
export type HttpFactoryResultCases = [
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createQuery<Query>>>,
      ReturnType<typeof typia.http.query<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createAssertQuery<Query>>>,
      ReturnType<typeof typia.http.assertQuery<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createIsQuery<Query>>>,
      ReturnType<typeof typia.http.isQuery<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createValidateQuery<Query>>>,
      ReturnType<typeof typia.http.validateQuery<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createFormData<Query>>>,
      ReturnType<typeof typia.http.formData<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createAssertFormData<Query>>>,
      ReturnType<typeof typia.http.assertFormData<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createIsFormData<Query>>>,
      ReturnType<typeof typia.http.isFormData<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createValidateFormData<Query>>>,
      ReturnType<typeof typia.http.validateFormData<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createHeaders<Query>>>,
      ReturnType<typeof typia.http.headers<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createAssertHeaders<Query>>>,
      ReturnType<typeof typia.http.assertHeaders<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createIsHeaders<Query>>>,
      ReturnType<typeof typia.http.isHeaders<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createValidateHeaders<Query>>>,
      ReturnType<typeof typia.http.validateHeaders<Query>>
    >
  >,
  Assert<
    Same<
      ReturnType<ReturnType<typeof typia.http.createParameter<number>>>,
      ReturnType<typeof typia.http.parameter<number>>
    >
  >,
  Assert<
    Same<ReturnType<ReturnType<typeof typia.http.createQuery<IPlain>>>, IPlain>
  >,
];

declare const queryResult: ReturnType<
  ReturnType<typeof typia.http.createQuery<Query>>
>;
declare const isQueryResult: ReturnType<
  ReturnType<typeof typia.http.createIsQuery<Query>>
>;
declare const formDataResult: ReturnType<
  ReturnType<typeof typia.http.createFormData<Query>>
>;
declare const assertHeadersResult: ReturnType<
  ReturnType<typeof typia.http.createAssertHeaders<Query>>
>;

/**
 * Carries compile-only negative controls for decoded class method calls.
 *
 * Each result declaration uses the exact original factory return type; it
 * replaces an unevaluated factory call so no native producer is needed merely
 * to typecheck whether twice is callable.
 *
 * @evidence contracts/testing.md#behavioral-verification Four original expected-error method-call checks remain on the exact inferred factory result types. If any result incorrectly exposes Query.twice as callable, its directive becomes unused and compilation fails.
 * @evidence contracts/testing.md#independent-expectations The authored Query.twice method is a runtime class member that resolved decoded data must not expose as callable; the controls do not compute expected output with a decoder.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary query, nullable isQuery, FormData and asserted headers preserve all four original negative forms, including optional chaining on isQuery.
 * @evidence contracts/testing.md#execution-ownership test-interface start checks this declaration with noEmit. It is never invoked, imports typia only for type queries and executes no factory or native transform; native output comparisons are separately owned by the original schema case.
 */
export const methodOnFactoryResult = () => [
  // @ts-expect-error a decoded Query has no callable twice method.
  queryResult.twice(),
  // @ts-expect-error the nullable query result has no callable twice method.
  isQueryResult?.twice(),
  // @ts-expect-error decoded FormData is class data rather than a Query instance.
  formDataResult.twice(),
  // @ts-expect-error asserted headers are class data rather than a Query instance.
  assertHeadersResult.twice(),
];

type Same<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
