import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertEquals_ConstantEnumeration = _test_assertEquals(
  TypeGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)(
  typia.createAssertEquals<ConstantEnumeration>(),
);
