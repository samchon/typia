import { TestStructure } from "@typia/template";
import typia from "typia";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to_async } from "../utils/resolved_equal_to_async";

/**
 * Verifies http.formData through its supplied operation and fixture.
 *
 * Transport preparation and resolved comparison have shared utility owners.
 * Fresh values and encoded representations remain local; the async function
 * awaits binary comparison before returning.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification create_form_data prepares a fresh authored value as a FormData; the supplied decoder must return its resolved projection according to resolved_equal_to_async.
 * @evidence contracts/testing.md#independent-expectations The original fixture and optional authored RESOLVE supply expected data. The maintained transport encoder is not another typia decoder; comparison assumes its transport preparation is correct and does not independently test all raw transport spellings. The asynchronous oracle reads Blob/File bytes in addition to structured content.
 * @evidence contracts/testing.md#distinguishing-cases The enrolled fixture supplies a clean scalar/array and optional-field scenario. No SPOILERS or malformed raw-transport scenarios execute here.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory typia.http.formData entries are discovered by TestServant. This helper owns the local preparation/comparison.
 */
export const _test_http_formData =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  async (decode: (input: FormData) => typia.Resolved<T>): Promise<void> => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = await resolved_equal_to_async(factory)(
      data,
      decoded,
    );
    if (equal === false)
      throw new Error(
        `Bug on typia.http.formData(): failed to understand ${name} type.`,
      );
  };
