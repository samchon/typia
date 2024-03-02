import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertEqualsCustom_ConstantEnumeration =
  _test_assertEquals(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.createAssertEquals<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
