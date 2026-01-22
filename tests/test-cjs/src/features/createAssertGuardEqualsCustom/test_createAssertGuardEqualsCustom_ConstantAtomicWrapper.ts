import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertGuardEqualsCustom_ConstantAtomicWrapper =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ConstantAtomicWrapper",
    )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
      typia.createAssertGuardEquals<ConstantAtomicWrapper>(
        (p) => new CustomGuardError(p),
      ),
    );
