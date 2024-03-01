import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertEqualsCustom_DynamicTag = _test_assertEquals(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(
  typia.createAssertEquals<DynamicTag>((p) => new CustomGuardError(p)),
);
