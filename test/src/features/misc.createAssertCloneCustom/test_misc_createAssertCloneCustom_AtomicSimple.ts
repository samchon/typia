import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_createAssertCloneCustom_AtomicSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(typia.misc.createAssertClone<AtomicSimple>((p) => new CustomGuardError(p)));
