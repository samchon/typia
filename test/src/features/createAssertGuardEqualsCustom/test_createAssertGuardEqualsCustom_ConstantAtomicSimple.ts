import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertGuardEqualsCustom_ConstantAtomicSimple =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertGuardEquals<ConstantAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
