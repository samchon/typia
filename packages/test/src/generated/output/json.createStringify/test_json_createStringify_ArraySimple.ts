import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_createStringify_ArraySimple = _test_json_stringify(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input: ArraySimple): string => {
  const $io1 = (input: any): boolean =>
    "string" === typeof input.name &&
    "string" === typeof input.body &&
    "number" === typeof input.rank;
  const $string = (typia.json.createStringify as any).string;
  const $number = (typia.json.createStringify as any).number;
  const $so0 = (input: any): any =>
    `{"name":${$string(input.name)},"email":${$string(
      input.email,
    )},"hobbies":${`[${input.hobbies
      .map(
        (elem: any) =>
          `{"name":${$string((elem as any).name)},"body":${$string(
            (elem as any).body,
          )},"rank":${$number((elem as any).rank)}}`,
      )
      .join(",")}]`}}`;
  return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
