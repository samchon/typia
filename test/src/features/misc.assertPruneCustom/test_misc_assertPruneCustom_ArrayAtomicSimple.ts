import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_assertPruneCustom_ArrayAtomicSimple = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.misc.assertPrune<ArrayAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
