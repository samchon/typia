import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IValidation, TypeGuardError } from "typia";

/**
 * Verifies absent required query properties decode or fail by each contract.
 *
 * The query decoder threw a plain `Error("missing <key>")` for every absent
 * required key (#2444). For an array that made `[]` undecodable, since a query
 * string has no other spelling for it, and made an absent `string[] | null`
 * throw instead of reading `null`. Because the `is`, `assert`, and `validate`
 * variants share the decoder, the throw also escaped their contracts: `null`,
 * an `IValidation` failure, and `TypeGuardError`. `http.query` itself keeps
 * `missing` for an absent required scalar.
 *
 * 1. Decode queries with absent required and nullable arrays through all eight
 *    direct and factory forms.
 * 2. Omit a required scalar and require each form's own failure shape.
 * 3. Keep present arrays, an empty `list=` value, and an invalid present scalar as
 *    the negative twins.
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight query forms handle absent arrays and report absent/invalid scalars using their operation-specific failure contract.
 * @evidence contracts/testing.md#independent-expectations Authored output objects establish empty/nullable/optional array semantics; fixed paths, null results and TypeGuardError checks establish validation failures independently.
 * @evidence contracts/testing.md#distinguishing-cases Three accepted queries across eight forms, direct/factory missing and invalid count checks, nullable scalar absence versus explicit null and empty list text all remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_query_absent_required in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native required/nullable/array metadata must connect query reading with is/assert/validate failure handling without leaking a plain decoder throw. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Three accepted queries across eight forms, direct/factory missing and invalid count checks, nullable scalar absence versus explicit null and empty list text all remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
 */
export const test_http_query_absent_required = (): void => {
  const decoders: Array<[string, (input: string) => IQuery | null]> = [
    ["query", (input) => typia.http.query<IQuery>(input)],
    ["assertQuery", (input) => typia.http.assertQuery<IQuery>(input)],
    ["isQuery", (input) => typia.http.isQuery<IQuery>(input)],
    [
      "validateQuery",
      (input) => unwrap(typia.http.validateQuery<IQuery>(input)),
    ],
    ["createQuery", typia.http.createQuery<IQuery>()],
    ["createAssertQuery", typia.http.createAssertQuery<IQuery>()],
    ["createIsQuery", typia.http.createIsQuery<IQuery>()],
    [
      "createValidateQuery",
      (input) => unwrap(typia.http.createValidateQuery<IQuery>()(input)),
    ],
  ];
  const cases: Array<[string, IQuery]> = [
    [
      "count=1&list=a&list=b&nullable=c",
      { count: 1, list: ["a", "b"], nullable: ["c"], optional: undefined },
    ],
    ["count=1", { count: 1, list: [], nullable: null, optional: undefined }],
    [
      "count=1&list=&optional=x",
      { count: 1, list: [""], nullable: null, optional: ["x"] },
    ],
  ];
  for (const [name, decode] of decoders)
    for (const [input, expected] of cases)
      TestEquality.equals(`${name}(${input})`, decode(input), expected);

  // an absent required scalar
  const absent: string = "list=a";
  for (const query of [
    () => typia.http.query<IQuery>(absent),
    () => typia.http.createQuery<IQuery>()(absent),
  ])
    TestValidator.predicate("query keeps missing", () => {
      try {
        query();
      } catch (error) {
        return (
          error instanceof TypeGuardError === false &&
          (error as Error).message === "missing count"
        );
      }
      return false;
    });
  for (const is of [
    typia.http.isQuery<IQuery>(absent),
    typia.http.createIsQuery<IQuery>()(absent),
  ])
    TestEquality.equals("isQuery returns null", is, null);
  for (const validation of [
    typia.http.validateQuery<IQuery>(absent),
    typia.http.createValidateQuery<IQuery>()(absent),
  ])
    TestEquality.equals(
      "validateQuery reports the path",
      validation.success ? [] : validation.errors.map((e) => e.path),
      ["$input.count"],
    );
  for (const assert of [
    () => typia.http.assertQuery<IQuery>(absent),
    () => typia.http.createAssertQuery<IQuery>()(absent),
  ])
    TestValidator.predicate("assertQuery throws TypeGuardError", () => {
      try {
        assert();
      } catch (error) {
        return error instanceof TypeGuardError && error.path === "$input.count";
      }
      return false;
    });

  // a present but invalid scalar is still rejected, at its own path
  const invalid: string = "count=x";
  for (const is of [
    typia.http.isQuery<IQuery>(invalid),
    typia.http.createIsQuery<IQuery>()(invalid),
  ])
    TestEquality.equals("isQuery rejects an invalid scalar", is, null);
  for (const validation of [
    typia.http.validateQuery<IQuery>(invalid),
    typia.http.createValidateQuery<IQuery>()(invalid),
  ])
    TestEquality.equals(
      "validateQuery rejects an invalid scalar",
      validation.success ? [] : validation.errors.map((e) => e.path),
      ["$input.count"],
    );
  for (const assert of [
    () => typia.http.assertQuery<IQuery>(invalid),
    () => typia.http.createAssertQuery<IQuery>()(invalid),
  ])
    TestValidator.predicate("assertQuery rejects an invalid scalar", () => {
      try {
        assert();
      } catch (error) {
        return error instanceof TypeGuardError && error.path === "$input.count";
      }
      return false;
    });

  // a required nullable scalar: absence is not `null`, the text `null` is
  for (const validate of [
    (input: string) => typia.http.validateQuery<INullable>(input),
    typia.http.createValidateQuery<INullable>(),
  ]) {
    TestEquality.equals(
      "nullable scalar absent",
      (() => {
        const result = validate("");
        return result.success ? [] : result.errors.map((e) => e.path);
      })(),
      ["$input.text"],
    );
    TestEquality.equals("nullable scalar null", unwrap(validate("text=null")), {
      text: null,
    });
  }
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface INullable {
  text: string | null;
}
interface IQuery {
  count: number;
  list: string[];
  nullable: string[] | null;
  optional?: string[];
}
