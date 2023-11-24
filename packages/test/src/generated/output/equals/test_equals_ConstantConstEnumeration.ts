import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_equals_ConstantConstEnumeration = _test_equals(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ConstantConstEnumeration => {
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any, _index1: number) =>
          0 === elem ||
          1 === elem ||
          2 === elem ||
          "Three" === elem ||
          "Four" === elem,
      )
    );
  })(input),
);
