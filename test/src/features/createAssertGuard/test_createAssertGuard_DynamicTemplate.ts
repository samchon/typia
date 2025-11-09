import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertGuard_DynamicTemplate = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.createAssertGuard<DynamicTemplate>());
