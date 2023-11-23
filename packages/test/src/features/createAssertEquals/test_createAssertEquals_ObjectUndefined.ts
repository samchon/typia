import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertEquals_ObjectUndefined = _test_assertEquals(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
  typia.createAssertEquals<ObjectUndefined>(),
);
