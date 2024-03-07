import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ConstantConstEnumeration =
  _test_assertGuard(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.createAssertGuard<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
