import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertGuardEqualsCustom_ConstantAtomicSimple = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.assertGuardEquals<ConstantAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
