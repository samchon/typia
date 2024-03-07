import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ArrayAtomicAlias =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.assertGuardEquals<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
