import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createAssertClone_AtomicAlias = _test_misc_assertClone(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
  typia.misc.createAssertClone<AtomicAlias>(),
);
