import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_stringify_ArrayAtomicSimple = _test_json_stringify(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  ((input: ArrayAtomicSimple): string => {
    const $number = (typia.json.stringify as any).number;
    const $string = (typia.json.stringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
  })(input),
);
