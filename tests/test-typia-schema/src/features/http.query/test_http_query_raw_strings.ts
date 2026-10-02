import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies every HTTP query decoder accepts raw and URL-shaped strings.
 *
 * The shared runtime parser previously replaced a string without `?` with an
 * empty query, so every direct and factory operation lost normal raw input.
 *
 * 1. Decode raw, prefixed, absolute-URL, relative-URL, and URL-valued inputs.
 * 2. Exercise direct and factory forms of query/assert/is/validate.
 * 3. Require identical typed values and preserve encoded question marks.
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that all eight query operations decode raw/prefixed/URL strings and preserve URL-valued or key-only raw text.
 * @evidence contracts/testing.md#independent-expectations Handwritten IQuery/IRawValues/key-only expected objects establish typed counts, repeated arrays and decoded question marks independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases Five URL spellings across eight forms, URL-without-query partial control, raw values containing ?/# and three key-only inputs retain all checks; the partial control now requires nonnull before checking absent name.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_query_raw_strings in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Generated query direct/factory assembly must actually pass each supported input spelling through the shared parser and correctly typed emitted readers. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Five URL spellings across eight forms, URL-without-query partial control, raw values containing ?/# and three key-only inputs retain all checks; the partial control now requires nonnull before checking absent name. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
 */
export const test_http_query_raw_strings = (): void => {
  const expected: IQuery = {
    name: "typia",
    count: 2,
    tags: ["a", "b"],
    token: "a?b",
  };
  const raw = "name=typia&count=2&tags=a&tags=b&token=a%3Fb";
  const inputs: string[] = [
    raw,
    `?${raw}`,
    `https://example.com/items?${raw}#fragment`,
    `/items?${raw}#fragment`,
    `items?${raw}#fragment`,
  ];
  const factories = [
    typia.http.createQuery<IQuery>(),
    typia.http.createAssertQuery<IQuery>(),
    (input: string) => typia.http.createIsQuery<IQuery>()(input),
    (input: string) => {
      const result = typia.http.createValidateQuery<IQuery>()(input);
      return result.success ? result.data : null;
    },
  ];
  for (const input of inputs) {
    const direct = [
      typia.http.query<IQuery>(input),
      typia.http.assertQuery<IQuery>(input),
      typia.http.isQuery<IQuery>(input),
      (() => {
        const result = typia.http.validateQuery<IQuery>(input);
        return result.success ? result.data : null;
      })(),
    ];
    for (const [index, value] of [
      ...direct,
      ...factories.map((fn) => fn(input)),
    ].entries())
      TestEquality.equals(`decoder ${index} for ${input}`, expected, value);
  }
  const withoutQuery = typia.http.isQuery<Partial<IQuery>>(
    "https://example.com/items#fragment",
  );
  if (withoutQuery === null)
    throw new Error(
      "a URL without a query must decode as a valid partial object",
    );
  TestEquality.equals(
    "URL without query",
    true,
    withoutQuery.name === undefined,
  );

  const rawValues =
    "path=/users/1&url=https://example.com/items?x=1&fragment=a#b";
  const rawExpected: IRawValues = {
    path: "/users/1",
    url: "https://example.com/items?x=1",
    fragment: "a#b",
  };
  const rawDecoders = [
    (input: string) => typia.http.query<IRawValues>(input),
    (input: string) => typia.http.assertQuery<IRawValues>(input),
    (input: string) => typia.http.isQuery<IRawValues>(input),
    (input: string) => {
      const result = typia.http.validateQuery<IRawValues>(input);
      return result.success ? result.data : null;
    },
    typia.http.createQuery<IRawValues>(),
    typia.http.createAssertQuery<IRawValues>(),
    (input: string) => typia.http.createIsQuery<IRawValues>()(input),
    (input: string) => {
      const result = typia.http.createValidateQuery<IRawValues>()(input);
      return result.success ? result.data : null;
    },
  ];
  rawDecoders.forEach((decode, index) =>
    TestEquality.equals(
      `raw URL-valued decoder ${index}`,
      rawExpected,
      decode(rawValues),
    ),
  );

  const keyOnlyDecoders = [
    (input: string) => typia.http.query<IKeyOnlyQuery>(input),
    (input: string) => typia.http.assertQuery<IKeyOnlyQuery>(input),
    (input: string) => typia.http.isQuery<IKeyOnlyQuery>(input),
    (input: string) => {
      const result = typia.http.validateQuery<IKeyOnlyQuery>(input);
      return result.success ? result.data : null;
    },
    typia.http.createQuery<IKeyOnlyQuery>(),
    typia.http.createAssertQuery<IKeyOnlyQuery>(),
    (input: string) => typia.http.createIsQuery<IKeyOnlyQuery>()(input),
    (input: string) => {
      const result = typia.http.createValidateQuery<IKeyOnlyQuery>()(input);
      return result.success ? result.data : null;
    },
  ];
  for (const [input, expected] of [
    ["flag", { flag: "" }],
    ["a%3Fb", { "a?b": "" }],
    ["flag#tail", { "flag#tail": "" }],
  ] as const)
    keyOnlyDecoders.forEach((decode, index) =>
      TestEquality.equals(
        `key-only raw decoder ${index} for ${input}`,
        expected as IKeyOnlyQuery,
        decode(input),
      ),
    );
};

interface IQuery {
  name: string;
  count: number;
  tags: string[];
  token: string;
}

interface IRawValues {
  path: string;
  url: string;
  fragment: string;
}

interface IKeyOnlyQuery {
  flag?: string;
  "a?b"?: string;
  "flag#tail"?: string;
}
