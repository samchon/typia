import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_misc_createPrune_TypeTagTuple = _test_misc_prune(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input: TypeTagTuple): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if ("tuple" === key) continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
