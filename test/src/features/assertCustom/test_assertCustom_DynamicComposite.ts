import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertCustom_DynamicComposite = _test_assert(
  CustomGuardError,
)("DynamicComposite")<DynamicComposite>(DynamicComposite)((input) =>
  typia.assert<DynamicComposite>(input, (p) => new CustomGuardError(p)),
);
