import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_createStringify_ConstantAtomicWrapper =
  _test_json_stringify("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input: ConstantAtomicWrapper): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${`{"value":${(input[0] as any).value}}`},${`{"value":${$number(
      (input[1] as any).value,
    )}}`},${`{"value":${$string((input[2] as any).value)}}`}]`;
  });
