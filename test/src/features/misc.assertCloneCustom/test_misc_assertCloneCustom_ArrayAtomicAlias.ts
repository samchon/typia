import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_assertCloneCustom_ArrayAtomicAlias = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.misc.assertClone<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
