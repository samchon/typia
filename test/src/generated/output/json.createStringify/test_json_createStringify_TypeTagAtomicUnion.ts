import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_createStringify_TypeTagAtomicUnion =
  _test_json_stringify("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input: TypeTagAtomicUnion): string => {
    const $io1 = (input: any): boolean =>
      ("string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7) ||
      ("number" === typeof input.value && 3 <= input.value);
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $throws = (typia.json.createStringify as any).throws;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value.map((elem: any) => $so1(elem)).join(",")}]`}}`;
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
  });
