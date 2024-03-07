import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonAtomicSimple =
  _test_assertEquals(CustomGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.createAssertEquals<ToJsonAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
