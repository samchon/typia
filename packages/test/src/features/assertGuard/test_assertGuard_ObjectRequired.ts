import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertGuard_ObjectRequired = _test_assertGuard(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.assertGuard<ObjectRequired>(input),
);
