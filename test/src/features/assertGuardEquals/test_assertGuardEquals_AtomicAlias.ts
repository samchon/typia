import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_AtomicAlias = _test_assertGuardEquals(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)((input) =>
  typia.assertGuardEquals<AtomicAlias>(input),
);
