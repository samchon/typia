import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertEqualsCustom_DynamicEnumeration =
  _test_assertEquals(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.createAssertEquals<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
