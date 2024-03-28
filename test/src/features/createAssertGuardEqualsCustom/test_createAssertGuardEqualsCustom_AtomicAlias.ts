import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertGuardEqualsCustom_AtomicAlias =
  _test_assertGuardEquals(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )(typia.createAssertGuardEquals<AtomicAlias>((p) => new CustomGuardError(p)));
