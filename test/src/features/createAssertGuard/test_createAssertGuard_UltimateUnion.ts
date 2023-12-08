import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssertGuard_UltimateUnion = _test_assertGuard(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.createAssertGuard<UltimateUnion>());
