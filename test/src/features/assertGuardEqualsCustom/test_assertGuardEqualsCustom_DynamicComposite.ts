import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_DynamicComposite =
  _test_assertGuardEquals(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)((input) =>
    typia.assertGuardEquals<DynamicComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
