import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_createIsParse_CommentTagObjectUnion = _test_json_isParse(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
  (input: any): import("typia").Primitive<CommentTagObjectUnion> => {
    const is = (input: any): input is CommentTagObjectUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7;
      const $iu0 = (input: any): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
