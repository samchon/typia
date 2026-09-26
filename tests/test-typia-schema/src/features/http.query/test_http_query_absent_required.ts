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

  // a present but invalid scalar is still rejected
  TestEquality.equals(
    "invalid scalar",
    (() => {
      const result = typia.http.validateQuery<IQuery>("count=x");
      return result.success ? [] : result.errors.map((e) => e.path);
    })(),
    ["$input.count"],
  );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IQuery {
  count: number;
  list: string[];
  nullable: string[] | null;
  optional?: string[];
}
