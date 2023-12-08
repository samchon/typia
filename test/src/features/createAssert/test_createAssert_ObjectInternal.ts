import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssert_ObjectInternal = _test_assert(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.createAssert<ObjectInternal>());
