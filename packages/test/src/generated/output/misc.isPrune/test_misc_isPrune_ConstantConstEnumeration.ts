import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_misc_isPrune_ConstantConstEnumeration = _test_misc_isPrune(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
  ((input: any): input is ConstantConstEnumeration => {
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
    const prune = (input: ConstantConstEnumeration): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
