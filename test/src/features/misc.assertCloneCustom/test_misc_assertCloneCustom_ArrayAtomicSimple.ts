import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_assertCloneCustom_ArrayAtomicSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.misc.assertClone<ArrayAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
