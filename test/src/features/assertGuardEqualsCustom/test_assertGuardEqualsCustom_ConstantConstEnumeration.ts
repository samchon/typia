import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertGuardEqualsCustom_ConstantConstEnumeration = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertGuardEquals<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
