import { TestStructure } from "@typia/template";
import typia from "typia";

import { create_query } from "../utils/create_query";
import { resolved_equal_to } from "../utils/resolved_equal_to";

/**
 * Verifies http.query through its supplied operation and fixture.
 *
 * Transport preparation and resolved comparison have shared utility owners.
 * Fresh values and encoded representations remain local; no request history is
 * retained.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification create_query prepares a fresh authored value as a URLSearchParams; the supplied decoder must return its resolved projection according to resolved_equal_to.
 * @evidence contracts/testing.md#independent-expectations The original fixture and optional authored RESOLVE supply expected data. The maintained transport encoder is not another typia decoder; comparison assumes its transport preparation is correct and does not independently test all raw transport spellings.
 * @evidence contracts/testing.md#distinguishing-cases The enrolled fixture supplies a clean scalar/array and optional-field scenario. No SPOILERS or malformed raw-transport scenarios execute here.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory typia.http.query entries are discovered by TestServant. This helper owns the local preparation/comparison.
 */
export const _test_http_query =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: URLSearchParams) => typia.Resolved<T>): void => {
    const data: T = factory.generate();
    const encoded: URLSearchParams = create_query(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(factory)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.query(): failed to understand ${name} type.`,
      );
  };
