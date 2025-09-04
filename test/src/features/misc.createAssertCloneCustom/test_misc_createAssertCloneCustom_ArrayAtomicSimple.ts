import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createAssertCloneCustom_ArrayAtomicSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.misc.createAssertClone<ArrayAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
