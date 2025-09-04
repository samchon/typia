import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_assertCloneCustom_AtomicUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) =>
    typia.misc.assertClone<AtomicUnion>(input, (p) => new CustomGuardError(p)),
  );
