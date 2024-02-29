import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_misc_createPrune_ConstantAtomicTagged = _test_misc_prune(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  (input: ConstantAtomicTagged): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("id" === key || "age" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  },
);
