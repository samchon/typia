import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertEqualsCustom_ConstantAtomicSimple = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.assertEquals<ConstantAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
