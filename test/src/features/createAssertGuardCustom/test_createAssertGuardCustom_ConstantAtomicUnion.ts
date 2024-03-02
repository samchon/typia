import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertGuardCustom_ConstantAtomicUnion =
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.createAssertGuard<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
