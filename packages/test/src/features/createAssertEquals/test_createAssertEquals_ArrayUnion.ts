import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertEquals_ArrayUnion = _test_assertEquals(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)(typia.createAssertEquals<ArrayUnion>());
