import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_createStringify_CommentTagObjectUnion =
  _test_json_stringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input: CommentTagObjectUnion): string => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.value &&
      3 <= input.value.length &&
      input.value.length <= 7;
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    const $throws = (typia.json.createStringify as any).throws;
    const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
    const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any): any =>
      (() => {
        if (
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7
        )
          return $so1(input);
        else if ("number" === typeof input.value && 3 <= input.value)
          return $so0(input);
        else
          $throws({
            expected:
              "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
            value: input,
          });
      })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
  });
