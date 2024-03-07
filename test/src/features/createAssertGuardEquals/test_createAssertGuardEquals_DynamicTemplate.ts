import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_DynamicTemplate =
  _test_assertGuardEquals(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.createAssertGuardEquals<DynamicTemplate>());
