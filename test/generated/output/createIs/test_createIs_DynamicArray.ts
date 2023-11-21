import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createIs_DynamicArray = _test_is(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input: any): input is DynamicArray => {
  const $io0 = (input: any): boolean =>
    "object" === typeof input.value &&
    null !== input.value &&
    false === Array.isArray(input.value) &&
    $io1(input.value);
  const $io1 = (input: any): boolean =>
    Object.keys(input).every((key: any) => {
      const value = input[key];
      if (undefined === value) return true;
      if (true)
        return (
          Array.isArray(value) &&
          value.every((elem: any) => "string" === typeof elem)
        );
      return true;
    });
  return "object" === typeof input && null !== input && $io0(input);
});
