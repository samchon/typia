import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertGuardEqualsCustom_DynamicComposite =
  _test_assertGuardEquals(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)(
    typia.createAssertGuardEquals<DynamicComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
