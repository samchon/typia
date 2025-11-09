import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createAssertCloneCustom_AtomicAlias = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )(typia.misc.createAssertClone<AtomicAlias>((p) => new CustomGuardError(p)));
