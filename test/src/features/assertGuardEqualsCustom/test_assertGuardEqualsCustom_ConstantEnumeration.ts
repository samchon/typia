import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertGuardEqualsCustom_ConstantEnumeration =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.assertGuardEquals<ConstantEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
