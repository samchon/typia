import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertGuardCustom_ConstantConstEnumeration = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.createAssertGuard<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
