import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_AtomicAlias = _test_assertGuardEquals(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
  typia.createAssertGuardEquals<AtomicAlias>(),
);
