import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_createStringify_ArrayMatrix = _test_json_stringify(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: ArrayMatrix): string => {
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $number = require("typia/lib/functional/$number").$number;
  return `[${input
    .map(
      (elem: any) =>
        `[${elem
          .map(
            (elem: any) =>
              `[${elem.map((elem: any) => $number(elem)).join(",")}]`,
          )
          .join(",")}]`,
    )
    .join(",")}]`;
});
