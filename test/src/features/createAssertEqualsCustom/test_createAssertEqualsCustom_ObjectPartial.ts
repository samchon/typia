import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertEqualsCustom_ObjectPartial = _test_assertEquals(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
  typia.createAssertEquals<ObjectPartial>((p) => new CustomGuardError(p)),
);
