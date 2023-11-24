import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertGuard_ArrayMatrix = _test_assertGuard(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createAssertGuard<ArrayMatrix>());
