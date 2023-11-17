import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_stringify_CommentTagArray = _test_json_stringify(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  ((input: CommentTagArray): string => {
    const $io1 = (input: any): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every((elem: any) => "string" === typeof elem) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every((elem: any) => "number" === typeof elem) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every((elem: any) => "string" === typeof elem) &&
      Array.isArray(input.equal) &&
      10 <= input.equal.length &&
      input.equal.length <= 10 &&
      input.equal.every((elem: any) => "number" === typeof elem);
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value
        .map((elem: any) => $so1(elem))
        .join(",")}]`}}`;
    const $so1 = (input: any): any =>
      `{"items":${`[${input.items
        .map((elem: any) => $string(elem))
        .join(",")}]`},"minItems":${`[${input.minItems
        .map((elem: any) => $number(elem))
        .join(",")}]`},"both":${`[${input.both
        .map((elem: any) => $string(elem))
        .join(",")}]`},"equal":${`[${input.equal
        .map((elem: any) => $number(elem))
        .join(",")}]`}}`;
    return $so0(input);
  })(input),
);
