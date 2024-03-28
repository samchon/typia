import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertGuardEqualsCustom_ArrayAtomicAlias =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.createAssertGuardEquals<ArrayAtomicAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
