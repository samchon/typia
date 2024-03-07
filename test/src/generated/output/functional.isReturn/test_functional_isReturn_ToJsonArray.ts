import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ToJsonArray } from "../../../structures/ToJsonArray";
export const test_functional_isReturn_ToJsonArray = _test_functional_isReturn(
  "ToJsonArray",
)(ToJsonArray)(
  (p: (input: ToJsonArray) => ToJsonArray) =>
    (input: ToJsonArray): ToJsonArray | null => {
      const result = p(input);
      return ((input: any): input is ToJsonArray => {
        const $io0 = (input: any): boolean =>
          "function" === typeof input.toJSON;
        const $io1 = (input: any): boolean =>
          "function" === typeof input.toJSON;
        const $io2 = (input: any): boolean =>
          "function" === typeof input.toJSON;
        const $io3 = (input: any): boolean =>
          "function" === typeof input.toJSON;
        return (
          Array.isArray(input) &&
          input.length === 4 &&
          "object" === typeof input[0] &&
          null !== input[0] &&
          $io0(input[0]) &&
          "object" === typeof input[1] &&
          null !== input[1] &&
          $io1(input[1]) &&
          "object" === typeof input[2] &&
          null !== input[2] &&
          $io2(input[2]) &&
          "object" === typeof input[3] &&
          null !== input[3] &&
          $io3(input[3])
        );
      })(result)
        ? result
        : null;
    },
);
