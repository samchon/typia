import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_misc_createIsPrune_ObjectHttpArray = _test_misc_isPrune(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input: any): input is ObjectHttpArray => {
  const is = (input: any): input is ObjectHttpArray => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.booleans) &&
      input.booleans.every((elem: any) => "boolean" === typeof elem) &&
      Array.isArray(input.bigints) &&
      input.bigints.every((elem: any) => "bigint" === typeof elem) &&
      Array.isArray(input.numbers) &&
      input.numbers.every(
        (elem: any) => "number" === typeof elem && Number.isFinite(elem),
      ) &&
      Array.isArray(input.strings) &&
      input.strings.every((elem: any) => "string" === typeof elem) &&
      Array.isArray(input.templates) &&
      input.templates.every(
        (elem: any) =>
          "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
      );
    return "object" === typeof input && null !== input && $io0(input);
  };
  const prune = (input: ObjectHttpArray): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "booleans" === key ||
          "bigints" === key ||
          "numbers" === key ||
          "strings" === key ||
          "templates" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  };
  if (!is(input)) return false;
  prune(input);
  return true;
});
