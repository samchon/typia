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
