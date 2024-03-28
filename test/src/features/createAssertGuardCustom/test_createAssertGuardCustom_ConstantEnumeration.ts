import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertGuardCustom_ConstantEnumeration =
  _test_assertGuard(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.createAssertGuard<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
