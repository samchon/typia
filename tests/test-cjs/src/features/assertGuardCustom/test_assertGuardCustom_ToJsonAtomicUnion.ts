import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertGuardCustom_ToJsonAtomicUnion = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )((input) =>
    typia.assertGuard<ToJsonAtomicUnion>(input, (p) => new CustomGuardError(p)),
  );
