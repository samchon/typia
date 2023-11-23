import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_createStringify_TypeTagRange = _test_json_stringify(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input: TypeTagRange): string => {
  const $io1 = (input: any): boolean =>
    "number" === typeof input.greater &&
    Math.floor(input.greater) === input.greater &&
    -2147483648 <= input.greater &&
    input.greater <= 2147483647 &&
    3 < input.greater &&
    "number" === typeof input.greater_equal &&
    Math.floor(input.greater_equal) === input.greater_equal &&
    -2147483648 <= input.greater_equal &&
    input.greater_equal <= 2147483647 &&
    3 <= input.greater_equal &&
    "number" === typeof input.less &&
    Math.floor(input.less) === input.less &&
    -2147483648 <= input.less &&
    input.less <= 2147483647 &&
    input.less < 7 &&
    "number" === typeof input.less_equal &&
    Math.floor(input.less_equal) === input.less_equal &&
    -2147483648 <= input.less_equal &&
    input.less_equal <= 2147483647 &&
    input.less_equal <= 7 &&
    "number" === typeof input.greater_less &&
    Math.floor(input.greater_less) === input.greater_less &&
    -2147483648 <= input.greater_less &&
    input.greater_less <= 2147483647 &&
    3 < input.greater_less &&
    input.greater_less < 7 &&
    "number" === typeof input.greater_equal_less &&
    Math.floor(input.greater_equal_less) === input.greater_equal_less &&
    -2147483648 <= input.greater_equal_less &&
    input.greater_equal_less <= 2147483647 &&
    3 <= input.greater_equal_less &&
    input.greater_equal_less < 7 &&
    "number" === typeof input.greater_less_equal &&
    Math.floor(input.greater_less_equal) === input.greater_less_equal &&
    -2147483648 <= input.greater_less_equal &&
    input.greater_less_equal <= 2147483647 &&
    3 < input.greater_less_equal &&
    input.greater_less_equal <= 7 &&
    "number" === typeof input.greater_equal_less_equal &&
    Math.floor(input.greater_equal_less_equal) ===
      input.greater_equal_less_equal &&
    -2147483648 <= input.greater_equal_less_equal &&
    input.greater_equal_less_equal <= 2147483647 &&
    3 <= input.greater_equal_less_equal &&
    input.greater_equal_less_equal <= 7 &&
    "number" === typeof input.equal &&
    Math.floor(input.equal) === input.equal &&
    -2147483648 <= input.equal &&
    input.equal <= 2147483647 &&
    10 <= input.equal &&
    input.equal <= 10;
  const $number = (typia.json.createStringify as any).number;
  const $so0 = (input: any): any =>
    `{"value":${`[${input.value
      .map(
        (elem: any) =>
          `{"greater":${$number(
            (elem as any).greater,
          )},"greater_equal":${$number(
            (elem as any).greater_equal,
          )},"less":${$number((elem as any).less)},"less_equal":${$number(
            (elem as any).less_equal,
          )},"greater_less":${$number(
            (elem as any).greater_less,
          )},"greater_equal_less":${$number(
            (elem as any).greater_equal_less,
          )},"greater_less_equal":${$number(
            (elem as any).greater_less_equal,
          )},"greater_equal_less_equal":${$number(
            (elem as any).greater_equal_less_equal,
          )},"equal":${$number((elem as any).equal)}}`,
      )
      .join(",")}]`}}`;
  return $so0(input);
});
