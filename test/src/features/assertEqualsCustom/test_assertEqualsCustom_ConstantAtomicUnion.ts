import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertEqualsCustom_ConstantAtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.assertEquals<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
