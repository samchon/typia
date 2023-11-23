import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssert_ObjectTuple = _test_assert(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.createAssert<ObjectTuple>());
