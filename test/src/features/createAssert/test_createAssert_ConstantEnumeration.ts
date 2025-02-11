import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssert_ConstantEnumeration = _test_assert(
  TypeGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)(
  typia.createAssert<ConstantEnumeration>(),
);
