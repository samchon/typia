import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertGuardEqualsCustom_ArrayAtomicSimple =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.createAssertGuardEquals<ArrayAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
