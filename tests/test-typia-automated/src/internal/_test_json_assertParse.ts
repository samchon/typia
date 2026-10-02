import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import typia, { Primitive, TypeGuardError } from "typia";

import { primitive_equal_to } from "../utils/primitive_equal_to";
import { _check_invalidate_json_value } from "./_check_invalidate_json_value";

/**
 * Verifies json.assertParse through its supplied operation and fixture.
 *
 * Clean platform projection precedes the supplied parser. Every spoiler
 * receives a new fixture and the private JSON-invalid filter remains owned by
 * its reusable utility.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied parser receives built-in JSON.stringify of a clean fixture and must return content equal to built-in JSON.parse of that text. Each JSON-representable spoiler must throw the exact selected error prototype with native-checked properties and one authored path. Platform JSON serialization/parsing establishes the clean projection, and authored spoilers establish invalid values/paths. _check_invalidate_json_value skips mutations with no faithful invalid JSON representation. The native error/result property checker shares the producer and is not an independent record oracle.
 * @evidence contracts/common.md#clear-and-simple-design Clean platform projection precedes the supplied parser. Every spoiler receives a new fixture and the private JSON-invalid filter remains owned by its reusable utility.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. Clean valid JSON contrasts with each representable spoiled value. Non-finite/undefined/function mutations filtered by the existing helper are not claimed as parser negatives. These cases do not supply malformed JSON syntax.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied parser receives built-in JSON.stringify of a clean fixture and must return content equal to built-in JSON.parse of that text. Each JSON-representable spoiler must throw the exact selected error prototype with native-checked properties and one authored path.
 * @evidence contracts/testing.md#independent-expectations Platform JSON serialization/parsing establishes the clean projection, and authored spoilers establish invalid values/paths. _check_invalidate_json_value skips mutations with no faithful invalid JSON representation. The native error/result property checker shares the producer and is not an independent record oracle.
 * @evidence contracts/testing.md#distinguishing-cases Clean valid JSON contrasts with each representable spoiled value. Non-finite/undefined/function mutations filtered by the existing helper are not claimed as parser negatives. These cases do not supply malformed JSON syntax.
 * @evidence contracts/testing.md#execution-ownership The committed test_json_assertParse_ObjectSimple composite supplies the native parser and TestServant entry. Its active full generated family is disabled; this helper owns projection and spoiler assertions.
 */
export const _test_json_assertParse =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (parse: (input: string) => Primitive<T>): void => {
    const data: T = factory.generate();
    const string: string = JSON.stringify(data);
    const expected: Primitive<T> = JSON.parse(string);
    const parsed: Primitive<T> = parse(string);

    if (primitive_equal_to(expected, parsed) === false) {
      throw new Error(
        `Bug on typia.json.assertParse(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      if (_check_invalidate_json_value(elem)) continue;

      try {
        parse(JSON.stringify(elem));
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
      throw new Error(
        `Bug on typia.json.assertParse(): failed to detect error on the ${name} type.`,
      );
    }
  };
