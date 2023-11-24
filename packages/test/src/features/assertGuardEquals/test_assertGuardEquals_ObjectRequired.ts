import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertGuardEquals_ObjectRequired = _test_assertGuardEquals(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.assertGuardEquals<ObjectRequired>(input),
);
