import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertCustom_ObjectAlias = _test_assert(
  CustomGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  typia.createAssert<ObjectAlias>((p) => new CustomGuardError(p)),
);
