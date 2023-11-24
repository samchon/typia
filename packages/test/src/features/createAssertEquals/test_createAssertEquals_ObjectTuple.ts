import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertEquals_ObjectTuple = _test_assertEquals(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.createAssertEquals<ObjectTuple>());
