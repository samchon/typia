import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertGuardEqualsCustom_ArrayAtomicAlias = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.assertGuardEquals<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
