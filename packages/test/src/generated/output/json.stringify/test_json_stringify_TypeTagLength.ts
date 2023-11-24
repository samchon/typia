import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_stringify_TypeTagLength = _test_json_stringify(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  ((input: TypeTagLength): string => {
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
    const $string = (typia.json.stringify as any).string;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value
        .map(
          (elem: any) =>
            `{"fixed":${$string((elem as any).fixed)},"minimum":${$string(
              (elem as any).minimum,
            )},"maximum":${$string(
              (elem as any).maximum,
            )},"minimum_and_maximum":${$string(
              (elem as any).minimum_and_maximum,
            )},"equal":${$string((elem as any).equal)}}`,
        )
        .join(",")}]`}}`;
    return $so0(input);
  })(input),
);
