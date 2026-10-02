import { TestStructure } from "@typia/template";
import { Primitive } from "typia";

import { primitive_equal_to } from "../utils/primitive_equal_to";
import { _check_invalidate_json_value } from "./_check_invalidate_json_value";

/**
 * Verifies json.isParse through its supplied operation and fixture.
 *
 * Clean platform projection precedes the supplied parser. Every spoiler
 * receives a new fixture and the private JSON-invalid filter remains owned by
 * its reusable utility.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied parser receives built-in JSON.stringify of a clean fixture and must return content equal to built-in JSON.parse of that text. Clean null fails; every JSON-representable spoiled input must return null. Platform JSON serialization/parsing establishes the clean projection, and authored spoilers establish invalid values/paths. _check_invalidate_json_value skips mutations with no faithful invalid JSON representation. The literal null rejection is independent of another validator.
 * @evidence contracts/common.md#clear-and-simple-design Clean platform projection precedes the supplied parser. Every spoiler receives a new fixture and the private JSON-invalid filter remains owned by its reusable utility.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. Clean valid JSON contrasts with each representable spoiled value. Non-finite/undefined/function mutations filtered by the existing helper are not claimed as parser negatives. These cases do not supply malformed JSON syntax.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied parser receives built-in JSON.stringify of a clean fixture and must return content equal to built-in JSON.parse of that text. Clean null fails; every JSON-representable spoiled input must return null.
 * @evidence contracts/testing.md#independent-expectations Platform JSON serialization/parsing establishes the clean projection, and authored spoilers establish invalid values/paths. _check_invalidate_json_value skips mutations with no faithful invalid JSON representation. The literal null rejection is independent of another validator.
 * @evidence contracts/testing.md#distinguishing-cases Clean valid JSON contrasts with each representable spoiled value. Non-finite/undefined/function mutations filtered by the existing helper are not claimed as parser negatives. These cases do not supply malformed JSON syntax.
 * @evidence contracts/testing.md#execution-ownership The committed test_json_isParse_ObjectSimple composite supplies the native parser and TestServant entry. Its active full generated family is disabled; this helper owns projection and spoiler assertions.
 */
export const _test_json_isParse =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (parse: (input: string) => Primitive<T> | null): void => {
    const data: T = factory.generate();
    const string: string = JSON.stringify(data);
    const expected: Primitive<T> = JSON.parse(string);
    const parsed: Primitive<T> | null = parse(string);

    if (parsed === null || primitive_equal_to(expected, parsed) === false) {
      console.log({
        string,
        expected,
        parsed,
      });
      throw new Error(
        `Bug on typia.json.isParse(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);
      if (_check_invalidate_json_value(elem)) continue;

      if (parse(JSON.stringify(elem)) !== null) {
        throw new Error(
          `Bug on typia.json.isParse(): failed to detect error on the ${name} type.`,
        );
      }
    }
  };
