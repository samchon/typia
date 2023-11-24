import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssertGuard_ObjectJsonTag = _test_assertGuard(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.createAssertGuard<ObjectJsonTag>());
