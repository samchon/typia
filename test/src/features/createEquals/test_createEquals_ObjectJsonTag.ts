import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createEquals_ObjectJsonTag = _test_equals(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.createEquals<ObjectJsonTag>());
