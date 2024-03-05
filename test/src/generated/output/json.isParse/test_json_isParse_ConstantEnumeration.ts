import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_isParse_ConstantEnumeration = _test_json_isParse(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((input: any): import("typia").Primitive<ConstantEnumeration> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
