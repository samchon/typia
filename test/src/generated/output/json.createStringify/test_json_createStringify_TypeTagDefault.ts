import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_createStringify_TypeTagDefault = _test_json_stringify(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input: TypeTagDefault): string => {
  const $number = (typia.json.createStringify as any).number;
  const $string = (typia.json.createStringify as any).string;
  const $throws = (typia.json.createStringify as any).throws;
  const $so0 = (input: any): any =>
    `{"boolean":${input.boolean},"number":${$number(input.number)},"string":${$string(input.string)},"text":${$string(input.text)},"boolean_and_number_and_string":${(() => {
      if ("number" === typeof input.boolean_and_number_and_string)
        return $number(input.boolean_and_number_and_string);
      if ("string" === typeof input.boolean_and_number_and_string)
        return $string(input.boolean_and_number_and_string);
      if ("boolean" === typeof input.boolean_and_number_and_string)
        return input.boolean_and_number_and_string;
      $throws({
        expected:
          '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
        value: input.boolean_and_number_and_string,
      });
    })()},"union_but_boolean":${(() => {
      if ("string" === typeof input.union_but_boolean)
        return $string(input.union_but_boolean);
      if ("number" === typeof input.union_but_boolean)
        return $number(input.union_but_boolean);
      if ("boolean" === typeof input.union_but_boolean)
        return input.union_but_boolean;
      $throws({
        expected: "((boolean & Default<false>) | number | string)",
        value: input.union_but_boolean,
      });
    })()},"union_but_number":${(() => {
      if ("string" === typeof input.union_but_number)
        return $string(input.union_but_number);
      if ("number" === typeof input.union_but_number)
        return $number(input.union_but_number);
      if ("boolean" === typeof input.union_but_number)
        return input.union_but_number;
      $throws({
        expected: "((number & Default<1>) | boolean | string)",
        value: input.union_but_number,
      });
    })()},"union_but_string":${(() => {
      if ("number" === typeof input.union_but_string)
        return $number(input.union_but_string);
      if ("string" === typeof input.union_but_string)
        return $string(input.union_but_string);
      if ("boolean" === typeof input.union_but_string)
        return input.union_but_string;
      $throws({
        expected: '((string & Default<"two">) | boolean | number)',
        value: input.union_but_string,
      });
    })()},"boolean_and_number_and_template":${(() => {
      if ("string" === typeof input.boolean_and_number_and_template)
        return $string(input.boolean_and_number_and_template);
      if ("number" === typeof input.boolean_and_number_and_template)
        return $number(input.boolean_and_number_and_template);
      if ("boolean" === typeof input.boolean_and_number_and_template)
        return input.boolean_and_number_and_template;
      $throws({
        expected:
          "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
        value: input.boolean_and_number_and_template,
      });
    })()}}`;
  return $so0(input);
});
