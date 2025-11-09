import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertCustom_ToJsonAtomicSimple = (): void =>
  _test_assert(CustomGuardError)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )(typia.createAssert<ToJsonAtomicSimple>((p) => new CustomGuardError(p)));
