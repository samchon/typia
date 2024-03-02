import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assert_DynamicComposite = _test_assert(TypeGuardError)(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.assert<DynamicComposite>(input),
);
