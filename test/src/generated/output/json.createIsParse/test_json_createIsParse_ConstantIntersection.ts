import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_createIsParse_ConstantIntersection = _test_json_isParse(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  (input: any): import("typia").Primitive<ConstantIntersection> => {
    const is = (input: any): input is ConstantIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        false === input[0] &&
        1 === input[1] &&
        "two" === input[2]
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
