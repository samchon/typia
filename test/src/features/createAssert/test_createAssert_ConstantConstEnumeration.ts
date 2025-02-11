import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssert_ConstantConstEnumeration = _test_assert(
  TypeGuardError,
)("ConstantConstEnumeration")<ConstantConstEnumeration>(
  ConstantConstEnumeration,
)(typia.createAssert<ConstantConstEnumeration>());
