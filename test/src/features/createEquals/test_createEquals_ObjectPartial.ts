import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createEquals_ObjectPartial = _test_equals(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.createEquals<ObjectPartial>());
