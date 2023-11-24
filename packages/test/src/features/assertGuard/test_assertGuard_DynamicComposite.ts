import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertGuard_DynamicComposite = _test_assertGuard(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.assertGuard<DynamicComposite>(input),
);
