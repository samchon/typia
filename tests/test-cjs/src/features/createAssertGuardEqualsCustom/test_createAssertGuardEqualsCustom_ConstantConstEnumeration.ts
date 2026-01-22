import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertGuardEqualsCustom_ConstantConstEnumeration =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
      typia.createAssertGuardEquals<ConstantConstEnumeration>(
        (p) => new CustomGuardError(p),
      ),
    );
