import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

/**
 * Verifies the query text `null` is a string unless the type admits `null`.
 *
 * The string reader mapped `"null"` to `null` for every string, so a required
 * `string` rejected the value `"null"`, an optional one dropped it, and the
 * literal type `"null"` could never be decoded (#2450). Only a type that admits
 * `null` may read the text as `null`; there the spelling is ambiguous and
 * `null` wins.
 *
 * 1. Decode `null` into required, optional, literal, nullable, and array
 *    string properties through all eight forms.
 * 2. Require the string `"null"` everywhere `null` is not admitted.
 * 3. Keep nullable strings and nullable numbers reading `null` as the twins.
 */
export const test_http_query_null_text = (): void => {
  const decoders: Array<[string, (input: string) => IQuery | null]> = [
    ["query", (input) => typia.http.query<IQuery>(input)],
    ["isQuery", (input) => typia.http.isQuery<IQuery>(input)],
    [
      "validateQuery",
      (input) => unwrap(typia.http.validateQuery<IQuery>(input)),
    ],
    ["assertQuery", (input) => typia.http.assertQuery<IQuery>(input)],
    ["createQuery", typia.http.createQuery<IQuery>()],
    ["createIsQuery", typia.http.createIsQuery<IQuery>()],
    [
      "createValidateQuery",
      (input) => unwrap(typia.http.createValidateQuery<IQuery>()(input)),
    ],
    ["createAssertQuery", typia.http.createAssertQuery<IQuery>()],
  ];
  const input: string = [
    "text=null",
    "optional=null",
    "kind=null",
    "nullable=null",
    "list=null",
    "list=x",
    "count=null",
  ].join("&");
  const expected: IQuery = {
    text: "null",
    optional: "null",
    kind: "null",
    nullable: null,
    list: ["null", "x"],
    count: null,
  };
  for (const [name, decode] of decoders)
    TestEquality.equals(name, decode(input), expected);
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IQuery {
  text: string;
  optional?: string;
  kind: "null" | "other";
  nullable: string | null;
  list: string[];
  count: number | null;
}
