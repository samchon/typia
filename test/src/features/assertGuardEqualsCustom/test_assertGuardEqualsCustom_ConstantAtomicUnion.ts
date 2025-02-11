import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertGuardEqualsCustom_ConstantAtomicUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.assertGuardEquals<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
