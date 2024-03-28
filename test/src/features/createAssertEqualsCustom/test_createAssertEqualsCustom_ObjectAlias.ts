import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertEqualsCustom_ObjectAlias = _test_assertEquals(
  CustomGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  typia.createAssertEquals<ObjectAlias>((p) => new CustomGuardError(p)),
);
