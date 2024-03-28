import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertCustom_ConstantConstEnumeration = _test_assert(
  CustomGuardError,
)("ConstantConstEnumeration")<ConstantConstEnumeration>(
  ConstantConstEnumeration,
)((input) =>
  typia.assert<ConstantConstEnumeration>(input, (p) => new CustomGuardError(p)),
);
