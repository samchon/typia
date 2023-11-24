import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assertGuard_DynamicNever = _test_assertGuard(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  typia.assertGuard<DynamicNever>(input),
);
