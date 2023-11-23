import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssert_ObjectDynamic = _test_assert(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(typia.createAssert<ObjectDynamic>());
