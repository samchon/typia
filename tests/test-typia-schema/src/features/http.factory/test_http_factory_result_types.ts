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
 * 1. Equate every factory's result type with its direct twin's, for a class and
 *    for a plain interface.
 * 2. Reject a method call on a class-typed factory result.
 * 3. Decode one input through each factory and its direct form.
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
