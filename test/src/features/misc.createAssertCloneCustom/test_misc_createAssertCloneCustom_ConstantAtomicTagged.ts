import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createAssertCloneCustom_ConstantAtomicTagged =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ConstantAtomicTagged",
    )<ConstantAtomicTagged>(ConstantAtomicTagged)(
      typia.misc.createAssertClone<ConstantAtomicTagged>(
        (p) => new CustomGuardError(p),
      ),
    );
