import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_createStringify_ArrayAtomicAlias = _test_json_stringify(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input: ArrayAtomicAlias): string => {
  const $number = (typia.json.createStringify as any).number;
  const $string = (typia.json.createStringify as any).string;
  return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
});
