import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertEquals_ObjectInternal = _test_assertEquals(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.createAssertEquals<ObjectInternal>());
