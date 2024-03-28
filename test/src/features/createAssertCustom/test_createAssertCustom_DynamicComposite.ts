import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertCustom_DynamicComposite = _test_assert(
  CustomGuardError,
)("DynamicComposite")<DynamicComposite>(DynamicComposite)(
  typia.createAssert<DynamicComposite>((p) => new CustomGuardError(p)),
);
