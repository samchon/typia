import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createIs_ToJsonDouble = _test_is(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.createIs<ToJsonDouble>());
