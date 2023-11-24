import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertEquals_ArrayMatrix = _test_assertEquals(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createAssertEquals<ArrayMatrix>());
