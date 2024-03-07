import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicTree = _test_misc_assertClone(
  TypeGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)(
  typia.misc.createAssertClone<DynamicTree>(),
);
