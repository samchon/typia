import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertGuardEquals_AtomicAlias = (): void =>
  _test_assertGuardEquals(TypeGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )((input) => typia.assertGuardEquals<AtomicAlias>(input));
