import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_isParse_CommentTagLength = _test_json_isParse(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  ((input: any): import("typia").Primitive<CommentTagLength> => {
    const is = (input: any): input is CommentTagLength => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.fixed &&
        5 <= input.fixed.length &&
        input.fixed.length <= 5 &&
        "string" === typeof input.minimum &&
        3 <= input.minimum.length &&
        "string" === typeof input.maximum &&
        input.maximum.length <= 7 &&
        "string" === typeof input.minimum_and_maximum &&
        3 <= input.minimum_and_maximum.length &&
        input.minimum_and_maximum.length <= 7 &&
        "string" === typeof input.equal &&
        10 <= input.equal.length &&
        input.equal.length <= 19;
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
