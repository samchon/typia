import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import typia, { TypeGuardError } from "typia";

import { headers_to_string } from "../utils/headers_to_string";
import { resolved_equal_to } from "../utils/resolved_equal_to";

/**
 * Verifies http.assertHeaders through its supplied operation and fixture.
 *
 * Transport preparation and resolved comparison have shared utility owners.
 * Fresh values and encoded representations remain local; no request history is
 * retained.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation headers_to_string prepares a fresh authored value as a header record; the supplied decoder must return its resolved projection according to resolved_equal_to. Every spoiled value must throw the selected exact error prototype, satisfy the native property check and report one authored allowed path. The original fixture and optional authored RESOLVE supply expected data. The maintained transport encoder is not another typia decoder; comparison assumes its transport preparation is correct and does not independently test all raw transport spellings. Exact prototype identity is independent; typia.is diagnostic shape is a correlated native check.
 * @evidence contracts/common.md#clear-and-simple-design Transport preparation and resolved comparison have shared utility owners. Fresh values and encoded representations remain local; no request history is retained.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. The enrolled fixture supplies a clean scalar/array and optional-field scenario. Each declared spoiler supplies invalid-value rejection; ordinary transport cases do not test malformed raw syntax.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification headers_to_string prepares a fresh authored value as a header record; the supplied decoder must return its resolved projection according to resolved_equal_to. Every spoiled value must throw the selected exact error prototype, satisfy the native property check and report one authored allowed path.
 * @evidence contracts/testing.md#independent-expectations The original fixture and optional authored RESOLVE supply expected data. The maintained transport encoder is not another typia decoder; comparison assumes its transport preparation is correct and does not independently test all raw transport spellings. Exact prototype identity is independent; typia.is diagnostic shape is a correlated native check.
 * @evidence contracts/testing.md#distinguishing-cases The enrolled fixture supplies a clean scalar/array and optional-field scenario. Each declared spoiler supplies invalid-value rejection; ordinary transport cases do not test malformed raw syntax.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory typia.http.assertHeaders entries are discovered by TestServant. This helper owns the local preparation/comparison and spoiler loop.
 */
export const _test_http_assertHeaders =
  (ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.Resolved<T>,
  ): void => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(factory)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.assertHeaders(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        decode(headers_to_string(elem));
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      console.log({ elem, expected });
      throw new Error(
        `Bug on typia.http.assertHeaders(): failed to detect error on the ${name} type.`,
      );
    }
  };
