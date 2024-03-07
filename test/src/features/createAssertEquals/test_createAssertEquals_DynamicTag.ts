import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_DynamicTag = _test_assertEquals(
  TypeGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(typia.createAssertEquals<DynamicTag>());
