import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertCustom_AtomicSimple = (): void =>
  _test_assert(CustomGuardError)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.createAssert<AtomicSimple>((p) => new CustomGuardError(p)),
  );
