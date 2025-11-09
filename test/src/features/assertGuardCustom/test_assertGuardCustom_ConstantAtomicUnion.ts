import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertGuardCustom_ConstantAtomicUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.assertGuard<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
