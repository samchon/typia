import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ToJsonAtomicSimple =
  _test_assertGuard(CustomGuardError)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )(
    typia.createAssertGuard<ToJsonAtomicSimple>((p) => new CustomGuardError(p)),
  );
