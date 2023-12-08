import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertGuard_ObjectPartial = _test_assertGuard(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.assertGuard<ObjectPartial>(input),
);
