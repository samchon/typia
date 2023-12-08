import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertEquals_ToJsonDouble = _test_assertEquals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertEquals<ToJsonDouble>(input),
);
