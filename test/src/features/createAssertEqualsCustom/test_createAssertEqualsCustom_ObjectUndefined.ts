import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertEqualsCustom_ObjectUndefined = _test_assertEquals(
  CustomGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
  typia.createAssertEquals<ObjectUndefined>((p) => new CustomGuardError(p)),
);
