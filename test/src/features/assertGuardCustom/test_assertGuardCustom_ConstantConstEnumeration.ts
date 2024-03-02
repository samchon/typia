import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertGuardCustom_ConstantConstEnumeration =
  _test_assertGuard(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertGuard<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
