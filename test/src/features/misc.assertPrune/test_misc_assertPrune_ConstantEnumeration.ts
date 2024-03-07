import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ConstantEnumeration = _test_misc_assertPrune(
  TypeGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.misc.assertPrune<ConstantEnumeration>(input),
);
