import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { DynamicNever } from "../../../structures/DynamicNever";
export const test_functional_isReturn_DynamicNever = _test_functional_isReturn(
  "DynamicNever",
)(DynamicNever)(
  (p: (input: DynamicNever) => DynamicNever) =>
    (input: DynamicNever): DynamicNever | null => {
      const result = p(input);
      return ((input: any): input is DynamicNever => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return null !== value && undefined === value;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      })(result)
        ? result
        : null;
    },
);
