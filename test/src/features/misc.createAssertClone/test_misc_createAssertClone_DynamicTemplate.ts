import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicTemplate =
  _test_misc_assertClone(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.misc.createAssertClone<DynamicTemplate>());
