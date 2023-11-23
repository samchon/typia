import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_createIsStringify_TypeTagDefault =
  _test_json_isStringify("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    (input: TypeTagDefault): string | null => {
      const is = (input: any): input is TypeTagDefault => {
        const $io0 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          Number.isFinite(input.number) &&
          "string" === typeof input.string &&
          "string" === typeof input.text &&
          (("number" === typeof input.boolean_and_number_and_string &&
            Number.isFinite(input.boolean_and_number_and_string)) ||
            "string" === typeof input.boolean_and_number_and_string ||
            "boolean" === typeof input.boolean_and_number_and_string) &&
          ("string" === typeof input.union_but_boolean ||
            ("number" === typeof input.union_but_boolean &&
              Number.isFinite(input.union_but_boolean)) ||
            "boolean" === typeof input.union_but_boolean) &&
          ("string" === typeof input.union_but_number ||
            ("number" === typeof input.union_but_number &&
              Number.isFinite(input.union_but_number)) ||
            "boolean" === typeof input.union_but_number) &&
          (("number" === typeof input.union_but_string &&
            Number.isFinite(input.union_but_string)) ||
            "string" === typeof input.union_but_string ||
            "boolean" === typeof input.union_but_string) &&
          null !== input.boolean_and_number_and_template &&
          undefined !== input.boolean_and_number_and_template &&
          (("number" === typeof input.boolean_and_number_and_template &&
            Number.isFinite(input.boolean_and_number_and_template)) ||
            "boolean" === typeof input.boolean_and_number_and_template ||
            ("string" === typeof input.boolean_and_number_and_template &&
              RegExp(/^prefix_(.*)/).test(
                input.boolean_and_number_and_template,
              )));
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: TypeTagDefault): string => {
        const $number = (typia.json.createIsStringify as any).number;
        const $string = (typia.json.createIsStringify as any).string;
        const $throws = (typia.json.createIsStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"boolean":${input.boolean},"number":${$number(
            input.number,
          )},"string":${$string(input.string)},"text":${$string(
            input.text,
          )},"boolean_and_number_and_string":${(() => {
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
      };
      return is(input) ? stringify(input) : null;
    },
  );
