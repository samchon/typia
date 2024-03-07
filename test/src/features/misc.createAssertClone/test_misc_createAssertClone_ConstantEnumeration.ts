import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantEnumeration =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.misc.createAssertClone<ConstantEnumeration>(),
  );
