import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_is_ToJsonNull = _test_is("ToJsonNull")<ToJsonNull>(
  ToJsonNull,
)((input) => typia.is<ToJsonNull>(input));
