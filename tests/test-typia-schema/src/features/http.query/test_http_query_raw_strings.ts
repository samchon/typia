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
 * @evidence contracts/testing.md#behavioral-verification typia.http.createQuery, typia.http.createAssertQuery, typia.http.createIsQuery is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (decoder … for …; URL without query; raw URL-valued decoder …; key-only raw decoder … for …). The case documents its purpose as: Verifies every HTTP query decoder accepts raw and URL-shaped strings.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The shared runtime parser previously replaced a string without `?` with an empty query, so every direct and factory operation lost normal raw input. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (decoder … for …; URL without query; raw URL-valued decoder …; key-only raw decoder … for …) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_query_raw_strings is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
    "URL without query",
    true,
    typia.http.isQuery<Partial<IQuery>>("https://example.com/items#fragment")
      ?.name === undefined,
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
