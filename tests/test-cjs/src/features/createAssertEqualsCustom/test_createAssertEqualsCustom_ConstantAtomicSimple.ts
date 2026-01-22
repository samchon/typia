import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertEqualsCustom_ConstantAtomicSimple = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertEquals<ConstantAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
