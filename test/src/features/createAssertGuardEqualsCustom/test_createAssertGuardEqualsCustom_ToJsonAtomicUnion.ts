import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertGuardEqualsCustom_ToJsonAtomicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.createAssertGuardEquals<ToJsonAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
