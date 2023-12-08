import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertEquals_ObjectRequired = _test_assertEquals(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.createAssertEquals<ObjectRequired>());
