import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertGuardEqualsCustom_ToJsonAtomicSimple =
  _test_assertGuardEquals(CustomGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.createAssertGuardEquals<ToJsonAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
