import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertGuardEqualsCustom_ConstantEnumeration =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ConstantEnumeration",
    )<ConstantEnumeration>(ConstantEnumeration)(
      typia.createAssertGuardEquals<ConstantEnumeration>(
        (p) => new CustomGuardError(p),
      ),
    );
