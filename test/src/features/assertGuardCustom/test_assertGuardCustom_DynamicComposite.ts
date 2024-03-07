import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicComposite = _test_assertGuard(
  CustomGuardError,
)("DynamicComposite")<DynamicComposite>(DynamicComposite)((input) =>
  typia.assertGuard<DynamicComposite>(input, (p) => new CustomGuardError(p)),
);
