import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_createIsParse_DynamicNever = _test_json_isParse(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input: any): typia.Primitive<DynamicNever> => {
  const is = (input: any): input is DynamicNever => {
    const $io0 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (true) return null !== value && undefined === value;
        return true;
      });
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input)
    );
  };
  input = JSON.parse(input);
  return is(input) ? (input as any) : null;
});
