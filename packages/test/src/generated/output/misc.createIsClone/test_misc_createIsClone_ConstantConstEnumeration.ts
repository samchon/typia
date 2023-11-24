import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_misc_createIsClone_ConstantConstEnumeration =
  _test_misc_isClone("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input: any): typia.Resolved<ConstantConstEnumeration> | null => {
    const is = (input: any): input is ConstantConstEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Three" === elem ||
            "Four" === elem,
        )
      );
    };
    const clone = (
      input: ConstantConstEnumeration,
    ): typia.Resolved<ConstantConstEnumeration> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  });
