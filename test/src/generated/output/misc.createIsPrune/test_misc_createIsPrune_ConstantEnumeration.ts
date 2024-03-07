import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_misc_createIsPrune_ConstantEnumeration = _test_misc_isPrune(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
  (input: any): input is ConstantEnumeration => {
    const is = (input: any): input is ConstantEnumeration => {
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
    const prune = (input: ConstantEnumeration): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
