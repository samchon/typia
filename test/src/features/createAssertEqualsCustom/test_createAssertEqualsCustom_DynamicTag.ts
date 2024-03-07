import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_DynamicTag = _test_assertEquals(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(
  typia.createAssertEquals<DynamicTag>((p) => new CustomGuardError(p)),
);
