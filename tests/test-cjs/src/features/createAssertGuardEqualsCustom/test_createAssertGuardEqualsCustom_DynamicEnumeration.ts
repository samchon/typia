import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuardEqualsCustom_DynamicEnumeration = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.createAssertGuardEquals<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
