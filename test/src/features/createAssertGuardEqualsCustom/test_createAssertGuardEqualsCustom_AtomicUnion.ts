import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertGuardEqualsCustom_AtomicUnion =
  _test_assertGuardEquals(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.createAssertGuardEquals<AtomicUnion>((p) => new CustomGuardError(p)));
