import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createEquals_ObjectRequired = _test_equals(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.createEquals<ObjectRequired>());
