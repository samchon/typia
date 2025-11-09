import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertGuardEquals_DynamicTemplate = (): void =>
  _test_assertGuardEquals(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) => typia.assertGuardEquals<DynamicTemplate>(input));
