import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_createIsStringify_TypeTagLength = _test_json_isStringify(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input: TypeTagLength): string | null => {
  const is = (input: any): input is TypeTagLength => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
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
  const stringify = (input: TypeTagLength): string => {
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
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
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
  };
  return is(input) ? stringify(input) : null;
});
