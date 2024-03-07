import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ConstantConstEnumeration =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertGuardEquals<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
