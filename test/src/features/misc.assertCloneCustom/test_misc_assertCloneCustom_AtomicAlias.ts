import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_assertCloneCustom_AtomicAlias = (): void =>
  _test_misc_assertClone(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )((input) =>
    typia.misc.assertClone<AtomicAlias>(input, (p) => new CustomGuardError(p)),
  );
