import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssert_ObjectSimple = _test_assert(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(typia.createAssert<ObjectSimple>());
