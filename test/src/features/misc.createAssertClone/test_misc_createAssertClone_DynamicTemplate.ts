import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createAssertClone_DynamicTemplate = (): void =>
  _test_misc_assertClone(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.misc.createAssertClone<DynamicTemplate>());
