import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertGuardEquals_ConstantEnumeration = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.createAssertGuardEquals<ConstantEnumeration>(),
  );
