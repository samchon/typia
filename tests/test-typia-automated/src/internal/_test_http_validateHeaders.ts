import { TestStructure } from "@typia/template";
import typia from "typia";

import { headers_to_string } from "../utils/headers_to_string";
import { resolved_equal_to } from "../utils/resolved_equal_to";

/**
 * Verifies http.validateHeaders through its supplied operation and fixture.
 *
 * Transport preparation and resolved comparison have shared utility owners.
 * Fresh values and encoded representations remain local; no request history is
 * retained.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification headers_to_string prepares a fresh authored value as a header record; the supplied decoder must return its resolved projection according to resolved_equal_to. Clean decoding must succeed with a consistent success record; every spoiler must fail with the complete sorted expected path multiset.
 * @evidence contracts/testing.md#independent-expectations The original fixture and optional authored RESOLVE supply expected data. The maintained transport encoder is not another typia decoder; comparison assumes its transport preparation is correct and does not independently test all raw transport spellings. Expected invalid paths come from spoilers; native assertEquals record consistency is correlated.
 * @evidence contracts/testing.md#distinguishing-cases The enrolled fixture supplies a clean scalar/array and optional-field scenario. Each declared spoiler supplies invalid-value rejection; ordinary transport cases do not test malformed raw syntax.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory typia.http.validateHeaders entries are discovered by TestServant. This helper owns the local preparation/comparison and spoiler loop.
 */
export const _test_http_validateHeaders =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.IValidation<typia.Resolved<T>>,
  ): void => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);

    const result: typia.IValidation<typia.Resolved<T>> = decode(encoded);
    if (result.success === false)
      throw new Error(
        `Bug on typia.http.validateHeaders(): failed to understand ${name} type.`,
      );
    typia.assertEquals<typia.IValidation.ISuccess<unknown>>(result);

    const equal: boolean =
      result !== null && resolved_equal_to(factory)(data, result.data);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.validateHeaders(): failed to understand ${name} type.`,
      );

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      const valid: typia.IValidation<typia.Resolved<T>> = decode(
        headers_to_string(elem),
      );
      if (valid.success === true)
        throw new Error(
          `Bug on typia.http.validateHeaders(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.http.validateHeaders(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
