import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertGuardCustom_ToJsonAtomicUnion = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.createAssertGuard<ToJsonAtomicUnion>((p) => new CustomGuardError(p)));
