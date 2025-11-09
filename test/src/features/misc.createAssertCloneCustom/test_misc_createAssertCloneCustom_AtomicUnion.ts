import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createAssertCloneCustom_AtomicUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.misc.createAssertClone<AtomicUnion>((p) => new CustomGuardError(p)));
