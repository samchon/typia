import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_functional_isReturn_DynamicTree = _test_functional_isReturn(
  "DynamicTree",
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) =>
    (input: DynamicTree): DynamicTree | null => {
      const result = p(input);
      return ((input: any): input is DynamicTree => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.sequence &&
          Number.isFinite(input.sequence) &&
          "object" === typeof input.children &&
          null !== input.children &&
          false === Array.isArray(input.children) &&
          $io1(input.children);
        const $io1 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return "object" === typeof value && null !== value && $io0(value);
          });
        return "object" === typeof input && null !== input && $io0(input);
      })(result)
        ? result
        : null;
    },
);
