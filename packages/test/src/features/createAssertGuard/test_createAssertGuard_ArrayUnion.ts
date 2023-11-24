import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertGuard_ArrayUnion = _test_assertGuard(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)(typia.createAssertGuard<ArrayUnion>());
