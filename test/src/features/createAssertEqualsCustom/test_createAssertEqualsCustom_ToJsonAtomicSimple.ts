import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertEqualsCustom_ToJsonAtomicSimple = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.createAssertEquals<ToJsonAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
