import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createAssertCloneCustom_AtomicIntersection =
  _test_misc_assertClone(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.misc.createAssertClone<AtomicIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
