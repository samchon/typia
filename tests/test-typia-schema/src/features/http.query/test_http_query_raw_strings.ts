import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies every HTTP query decoder accepts raw and URL-shaped strings.
 *
 * The shared runtime parser previously replaced a string without `?` with an
 * empty query, so every direct and factory operation lost normal raw input.
 *
 * 1. Decode raw, prefixed, absolute-URL, relative-URL, and encoded-question inputs.
 * 2. Exercise direct and factory forms of query/assert/is/validate.
 * 3. Require identical typed values and preserve encoded question marks.
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
    for (const [index, value] of [...direct, ...factories.map((fn) => fn(input))].entries())
      TestValidator.equals(`decoder ${index} for ${input}`, expected, value);
  }
  TestValidator.equals(
    "URL without query",
    true,
    typia.http.isQuery<Partial<IQuery>>("https://example.com/items#fragment")
      ?.name === undefined,
  );
};

interface IQuery {
  name: string;
  count: number;
  tags: string[];
  token: string;
}
