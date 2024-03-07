import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_DynamicTag = _test_assertEquals(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertEquals<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
