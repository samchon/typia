import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssert_DynamicTemplate = _test_assert(TypeGuardError)(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(typia.createAssert<DynamicTemplate>());
