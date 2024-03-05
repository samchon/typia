import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertEquals_ArrayMatrix = _test_assertEquals(TypeGuardError)(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) => typia.assertEquals<ArrayMatrix>(input));
