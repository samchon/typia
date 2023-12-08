import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertEquals_ToJsonUnion = _test_assertEquals(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.createAssertEquals<ToJsonUnion>());
