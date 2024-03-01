import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertGuardCustom_ObjectGeneric = _test_assertGuard(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.createAssertGuard<ObjectGeneric>((p) => new CustomGuardError(p)),
);
