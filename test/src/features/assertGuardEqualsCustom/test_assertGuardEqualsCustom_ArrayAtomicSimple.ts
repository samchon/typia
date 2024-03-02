import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_assertGuardEqualsCustom_ArrayAtomicSimple =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.assertGuardEquals<ArrayAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
