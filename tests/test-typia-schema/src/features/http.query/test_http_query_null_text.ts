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
 * 1. Decode `null` into required, optional, literal, nullable, and array string
 *    properties through all eight forms.
 * 2. Require the string `"null"` everywhere `null` is not admitted.
 * 3. Keep nullable strings, nullable numbers, `unknown`, `any`, and nullable array
 *    elements reading `null` as the twins; a nullable array's own element does
 *    not admit it.
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight query forms keep the literal text null unless the declared scalar or element domain admits null.
 * @evidence contracts/testing.md#independent-expectations Handwritten string/null outputs follow each TypeScript declaration; explicit optionalUnknown absence stays undefined.
 * @evidence contracts/testing.md#distinguishing-cases Required/optional/literal/nullable/array strings and nullable count across eight forms, unknown/any, nullable container versus nullable elements and absent optionalUnknown remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_query_null_text in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native nullability metadata must select correct emitted query scalar and array-element readers instead of globally converting null text. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Required/optional/literal/nullable/array strings and nullable count across eight forms, unknown/any, nullable container versus nullable elements and absent optionalUnknown remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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

  // `unknown` and `any` admit `null`; a nullable array's element does not,
  // while an array of nullable strings does
  TestEquality.equals(
    "admitting units",
    typia.http.query<IAdmitting>(
      "unknown=null&optionalUnknown=null&any=null&nullableList=null&nullableElements=null&nullableElements=x",
    ),
    {
      unknown: null,
      optionalUnknown: null,
      any: null,
      nullableList: ["null"],
      nullableElements: [null, "x"],
    },
  );
  // absence is still `undefined`, not `null`
  TestEquality.equals(
    "absent optional unknown",
    typia.http.query<IAdmitting>("unknown=x&any=x").optionalUnknown,
    undefined,
  );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IAdmitting {
  unknown: unknown;
  optionalUnknown?: unknown;
  any: any;
  nullableList: string[] | null;
  nullableElements: (string | null)[];
}
interface IQuery {
  text: string;
  optional?: string;
  kind: "null" | "other";
  nullable: string | null;
  list: string[];
  count: number | null;
}
