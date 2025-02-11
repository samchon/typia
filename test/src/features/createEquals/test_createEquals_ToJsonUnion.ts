import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createEquals_ToJsonUnion = _test_equals(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.createEquals<ToJsonUnion>());
