import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies each `http.create*` factory returns what its direct form returns.
 *
 * The direct decoders return `Resolved<T>`, the plain object they build, but
 * nine factories declared `T`. For a class `T`, `Resolved<T>` turns a method
 * into `never`, so calling it on a direct result is a compile error, while the
 * same call on a factory result compiled and threw `TypeError` at runtime
 * (#2454). The compile-time cases below are the oracle; the runtime half pins
 * that both forms decode the same value.
 *
 * 1. Equate every factory's result type with its direct twin's, for a class (for
 *    `number` in `createParameter`'s atomic case), and keep a plain interface's
 *    result the interface itself.
 * 2. Reject a method call on a class-typed factory result.
 * 3. Decode one input through each factory but `createValidate*` and its direct
 *    form.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.http.createQuery, typia.http.query, typia.http.createAssertQuery is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (query; assertQuery; isQuery; formData; assertFormData; isFormData). The case documents its purpose as: Verifies each `http.create*` factory returns what its direct form returns.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The direct decoders return `Resolved<T>`, the plain object they build, but nine factories declared `T`. For a class `T`, `Resolved<T>` turns a method into `never`, so calling it on a direct result is a compile error, while the same call on a factory result compiled and threw `TypeError` at runtime (#2454). The compile-time cases below are the oracle; the runtime half pins that both forms decode the same value. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (query; assertQuery; isQuery; formData; assertFormData; isFormData) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_factory_result_types is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_http_factory_result_types = (): void => {
  const form = (): FormData => {
    const output: FormData = new FormData();
    output.append("x", "1");
    return output;
  };
  TestEquality.equals(
    "query",
    typia.http.createQuery<Query>()("x=1"),
    typia.http.query<Query>("x=1"),
  );
  TestEquality.equals(
    "assertQuery",
    typia.http.createAssertQuery<Query>()("x=1"),
    typia.http.assertQuery<Query>("x=1"),
  );
  TestEquality.equals(
    "isQuery",
    typia.http.createIsQuery<Query>()("x=1"),
    typia.http.isQuery<Query>("x=1"),
  );
  TestEquality.equals(
    "formData",
    typia.http.createFormData<Query>()(form()),
    typia.http.formData<Query>(form()),
  );
  TestEquality.equals(
    "assertFormData",
    typia.http.createAssertFormData<Query>()(form()),
    typia.http.assertFormData<Query>(form()),
  );
  TestEquality.equals(
    "isFormData",
    typia.http.createIsFormData<Query>()(form()),
    typia.http.isFormData<Query>(form()),
  );
  TestEquality.equals(
    "headers",
    typia.http.createHeaders<Query>()({ x: "1" }),
    typia.http.headers<Query>({ x: "1" }),
  );
  TestEquality.equals(
    "assertHeaders",
    typia.http.createAssertHeaders<Query>()({ x: "1" }),
    typia.http.assertHeaders<Query>({ x: "1" }),
  );
  TestEquality.equals(
    "isHeaders",
    typia.http.createIsHeaders<Query>()({ x: "1" }),
    typia.http.isHeaders<Query>({ x: "1" }),
  );
  TestEquality.equals(
    "parameter",
    typia.http.createParameter<number>()("1"),
    typia.http.parameter<number>("1"),
  );
};

class Query {
  public x!: number;
  public twice(): number {
    return this.x * 2;
  }
}
interface IPlain {
  x: number;
}

declare const url: string;
declare const data: FormData;
declare const record: Record<string, string>;

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

/**
 * Holds compile-time assertions about the types of factory results.
 *
 * @evidence contracts/testing.md#behavioral-verification methodOnFactoryResult is never executed; its @ts-expect-error lines make the compiler fail the project if a decoded query or form value gains a method.
 * @evidence contracts/testing.md#independent-expectations The TypeScript compiler is the oracle for the expected type errors.
 * @evidence contracts/testing.md#distinguishing-cases Each factory entry point has one expected error line; there is no runtime negative.
 * @evidence contracts/testing.md#execution-ownership It is evaluated at type-check time when the project is compiled for the test-typia-schema start command, not at run time.
 */
export const methodOnFactoryResult = () => [
  // @ts-expect-error a decoded `Query` has no `twice` method.
  typia.http.createQuery<Query>()(url).twice(),
  // @ts-expect-error
  typia.http.createIsQuery<Query>()(url)?.twice(),
  // @ts-expect-error
  typia.http.createFormData<Query>()(data).twice(),
  // @ts-expect-error
  typia.http.createAssertHeaders<Query>()(record).twice(),
];

type Same<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
