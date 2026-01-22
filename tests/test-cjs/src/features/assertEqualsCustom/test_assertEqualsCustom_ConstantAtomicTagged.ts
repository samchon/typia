import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertEqualsCustom_ConstantAtomicTagged = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.assertEquals<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
