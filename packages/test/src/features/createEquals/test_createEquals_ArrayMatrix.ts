import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createEquals_ArrayMatrix = _test_equals(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createEquals<ArrayMatrix>());
