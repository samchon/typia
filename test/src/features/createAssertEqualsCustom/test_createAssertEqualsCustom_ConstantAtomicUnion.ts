import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertEqualsCustom_ConstantAtomicUnion =
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.createAssertEquals<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
