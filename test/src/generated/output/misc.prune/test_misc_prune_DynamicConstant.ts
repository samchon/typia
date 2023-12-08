import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_prune_DynamicConstant = _test_misc_prune(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  ((input: DynamicConstant): void => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.a &&
      "number" === typeof input.b &&
      "number" === typeof input.c &&
      "number" === typeof input.d;
    const $po0 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $po1(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("a" === key || "b" === key || "c" === key || "d" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
