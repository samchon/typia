import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_validateEquals_ToJsonUnion = _test_validateEquals(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) =>
  typia.validateEquals<ToJsonUnion>(input),
);
