import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertEquals_DynamicTag = _test_assertEquals(
  TypeGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(typia.createAssertEquals<DynamicTag>());
