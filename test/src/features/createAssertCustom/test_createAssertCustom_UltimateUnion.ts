import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssertCustom_UltimateUnion = _test_assert(
  CustomGuardError,
)("UltimateUnion")<UltimateUnion>(UltimateUnion)(
  typia.createAssert<UltimateUnion>((p) => new CustomGuardError(p)),
);
