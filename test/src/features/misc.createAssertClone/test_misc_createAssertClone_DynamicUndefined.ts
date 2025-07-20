import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createAssertClone_DynamicUndefined = (): void =>
  _test_misc_assertClone(TypeGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )(typia.misc.createAssertClone<DynamicUndefined>());
