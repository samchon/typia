import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_createStringify_TupleHierarchical = _test_json_stringify(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input: TupleHierarchical): string => {
  const $number = (typia.json.createStringify as any).number;
  const $string = (typia.json.createStringify as any).string;
  return `[${input[0]},null,${$number(input[2])},${`[${
    input[3][0]
  },null,${`[${$number(input[3][2][0])},${`[${input[3][2][1][0]},${$string(
    input[3][2][1][1],
  )}]`}]`}]`},${`[${$number(input[4][0])},${`[${input[4][1]
    .map(
      (elem: any) =>
        `[${$string(elem[0])},${elem[1]},${`[${elem[2]
          .map(
            (elem: any) =>
              `[${$number(elem[0])},${$number(elem[1])},${`[${
                elem[2][0]
              },${$string(elem[2][1])}]`}]`,
          )
          .join(",")}]`}]`,
    )
    .join(",")}]`}]`}]`;
});
