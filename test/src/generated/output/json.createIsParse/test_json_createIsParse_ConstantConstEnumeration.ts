import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_createIsParse_ConstantConstEnumeration =
  _test_json_isParse("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input: any): import("typia").Primitive<ConstantConstEnumeration> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  });
