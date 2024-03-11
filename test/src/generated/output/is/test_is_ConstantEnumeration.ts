import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_is_ConstantEnumeration = _test_is(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((input: any): input is ConstantEnumeration => {
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) =>
          0 === elem ||
          1 === elem ||
          2 === elem ||
          "Four" === elem ||
          "Three" === elem,
      )
    );
  })(input),
);
