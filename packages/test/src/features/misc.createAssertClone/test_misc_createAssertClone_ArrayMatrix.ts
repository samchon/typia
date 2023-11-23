import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createAssertClone_ArrayMatrix = _test_misc_assertClone(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.misc.createAssertClone<ArrayMatrix>());
