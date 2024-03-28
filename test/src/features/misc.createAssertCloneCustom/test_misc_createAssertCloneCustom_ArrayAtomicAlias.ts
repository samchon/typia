import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createAssertCloneCustom_ArrayAtomicAlias =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.misc.createAssertClone<ArrayAtomicAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
