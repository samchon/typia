import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_createIsStringify_ObjectUnionNonPredictable =
  _test_json_isStringify(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    (input: ObjectUnionNonPredictable): string | null => {
      const is = (input: any): input is ObjectUnionNonPredictable => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io2(input.value);
        const $io2 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          "boolean" === typeof (input.value as any).value;
        const $io5 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          "number" === typeof (input.value as any).value &&
          Number.isFinite((input.value as any).value);
        const $io7 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          "string" === typeof (input.value as any).value;
        const $iu0 = (input: any): any =>
          (() => {
            if ($io7(input)) return $io7(input);
            else if ($io5(input)) return $io5(input);
            else if ($io3(input)) return $io3(input);
            else return false;
          })();
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: ObjectUnionNonPredictable): string => {
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io2(input.value);
        const $io2 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io4(input.value);
        const $io4 = (input: any): boolean => "boolean" === typeof input.value;
        const $io5 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io6(input.value);
        const $io6 = (input: any): boolean => "number" === typeof input.value;
        const $io7 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io8(input.value);
        const $io8 = (input: any): boolean => "string" === typeof input.value;
        const $iu0 = (input: any): any =>
          $io7(input) || $io5(input) || $io3(input);
        const $number = (typia.json.createIsStringify as any).number;
        const $string = (typia.json.createIsStringify as any).string;
        const $throws = (typia.json.createIsStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map((elem: any) => $so1(elem))
            .join(",")}]`}}`;
        const $so1 = (input: any): any => `{"value":${$so2(input.value)}}`;
        const $so2 = (input: any): any => `{"value":${$su0(input.value)}}`;
        const $so3 = (input: any): any =>
          `{"value":${`{"value":${(input.value as any).value}}`}}`;
        const $so5 = (input: any): any =>
          `{"value":${`{"value":${$number((input.value as any).value)}}`}}`;
        const $so7 = (input: any): any =>
          `{"value":${`{"value":${$string((input.value as any).value)}}`}}`;
        const $su0 = (input: any): any =>
          (() => {
            if ($io7(input)) return $so7(input);
            else if ($io5(input)) return $so5(input);
            else if ($io3(input)) return $so3(input);
            else
              $throws({
                expected:
                  "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                value: input,
              });
          })();
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    },
  );
