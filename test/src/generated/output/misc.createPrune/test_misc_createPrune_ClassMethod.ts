import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_createPrune_ClassMethod = _test_misc_prune(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input: ClassMethod): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if ("name" === key || "age" === key) continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
