import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_stringify_CommentTagAtomicUnion = _test_json_stringify(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
  ((input: CommentTagAtomicUnion): string => {
    const $io1 = (input: any): boolean =>
      ("string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7) ||
      ("number" === typeof input.value && 3 <= input.value);
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    const $throws = (typia.json.stringify as any).throws;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value
        .map((elem: any) => $so1(elem))
        .join(",")}]`}}`;
    const $so1 = (input: any): any =>
      `{"value":${(() => {
        if (
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7
        )
          return $string(input.value);
        if ("number" === typeof input.value && 3 <= input.value)
          return $number(input.value);
        $throws({
          expected:
            "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
          value: input.value,
        });
      })()}}`;
    return $so0(input);
  })(input),
);
