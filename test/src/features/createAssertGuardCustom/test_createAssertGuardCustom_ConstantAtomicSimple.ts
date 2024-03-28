import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertGuardCustom_ConstantAtomicSimple =
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertGuard<ConstantAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
