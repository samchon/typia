import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_assertCloneCustom_AtomicSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) =>
    typia.misc.assertClone<AtomicSimple>(input, (p) => new CustomGuardError(p)),
  );
