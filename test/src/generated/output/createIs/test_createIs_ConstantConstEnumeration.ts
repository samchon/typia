import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createIs_ConstantConstEnumeration = _test_is(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
  (input: any): input is ConstantConstEnumeration => {
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
  },
);
