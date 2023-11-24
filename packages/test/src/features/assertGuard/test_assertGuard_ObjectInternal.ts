import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertGuard_ObjectInternal = _test_assertGuard(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
  typia.assertGuard<ObjectInternal>(input),
);
