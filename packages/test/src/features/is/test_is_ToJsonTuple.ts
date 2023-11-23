import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_is_ToJsonTuple = _test_is("ToJsonTuple")<ToJsonTuple>(
  ToJsonTuple,
)((input) => typia.is<ToJsonTuple>(input));
