import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertEqualsCustom_ConstantConstEnumeration =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
      typia.createAssertEquals<ConstantConstEnumeration>(
        (p) => new CustomGuardError(p),
      ),
    );
