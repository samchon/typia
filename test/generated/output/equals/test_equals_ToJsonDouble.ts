import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_equals_ToJsonDouble = _test_equals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  ((input: any, _exceptionable: boolean = true): input is ToJsonDouble => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      0 === Object.keys(input).length ||
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return false;
      });
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input, true)
    );
  })(input),
);
