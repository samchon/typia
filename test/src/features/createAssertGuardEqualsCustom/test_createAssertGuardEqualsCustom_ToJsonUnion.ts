import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertGuardEqualsCustom_ToJsonUnion =
  _test_assertGuardEquals(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
  )(typia.createAssertGuardEquals<ToJsonUnion>((p) => new CustomGuardError(p)));
