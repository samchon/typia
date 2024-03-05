import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertEqualsCustom_DynamicUnion = _test_assertEquals(
  CustomGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  typia.assertEquals<DynamicUnion>(input, (p) => new CustomGuardError(p)),
);
