import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ConstantEnumeration = _test_assertEquals(
  TypeGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)(
  typia.createAssertEquals<ConstantEnumeration>(),
);
