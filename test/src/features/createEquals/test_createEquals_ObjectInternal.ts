import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createEquals_ObjectInternal = _test_equals(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.createEquals<ObjectInternal>());
