import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createAssertClone_ConstantEnumeration =
  _test_misc_assertClone("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )(typia.misc.createAssertClone<ConstantEnumeration>());
