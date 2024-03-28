import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_assertPruneCustom_ConstantAtomicWrapper =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.misc.assertPrune<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
