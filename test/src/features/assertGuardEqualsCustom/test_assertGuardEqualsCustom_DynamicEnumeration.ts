import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertGuardEqualsCustom_DynamicEnumeration =
  _test_assertGuardEquals(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.assertGuardEquals<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
