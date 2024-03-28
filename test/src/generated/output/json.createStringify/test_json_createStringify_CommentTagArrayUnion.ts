import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_createStringify_CommentTagArrayUnion =
  _test_json_stringify("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input: CommentTagArrayUnion): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $throws = (typia.json.createStringify as any).throws;
    const $so0 = (input: any): any =>
      `{"items":${`[${input.items.map((elem: any) => $string(elem)).join(",")}]`},"minItems":${`[${input.minItems.map((elem: any) => $number(elem)).join(",")}]`},"maxItems":${`[${input.maxItems
        .map((elem: any) =>
          (() => {
            if ("string" === typeof elem) return $string(elem);
            if ("number" === typeof elem) return $number(elem);
            $throws({
              expected: "(number | string)",
              value: elem,
            });
          })(),
        )
        .join(
          ",",
        )}]`},"both":${`[${input.both.map((elem: any) => $string(elem)).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
  });
