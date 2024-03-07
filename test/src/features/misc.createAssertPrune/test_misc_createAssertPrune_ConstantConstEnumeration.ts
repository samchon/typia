import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ConstantConstEnumeration =
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.misc.createAssertPrune<ConstantConstEnumeration>(),
  );
