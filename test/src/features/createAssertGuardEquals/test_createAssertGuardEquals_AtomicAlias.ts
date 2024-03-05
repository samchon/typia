import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertGuardEquals_AtomicAlias = _test_assertGuardEquals(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
  typia.createAssertGuardEquals<AtomicAlias>(),
);
