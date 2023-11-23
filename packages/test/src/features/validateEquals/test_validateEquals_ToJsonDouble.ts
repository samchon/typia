import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_validateEquals_ToJsonDouble = _test_validateEquals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.validateEquals<ToJsonDouble>(input),
);
