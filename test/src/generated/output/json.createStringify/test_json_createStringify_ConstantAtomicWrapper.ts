import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_createStringify_ConstantAtomicWrapper =
  _test_json_stringify("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input: ConstantAtomicWrapper): string => {
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    return `[${`{"value":${(input[0] as any).value}}`},${`{"value":${$number((input[1] as any).value)}}`},${`{"value":${$string((input[2] as any).value)}}`}]`;
  });
