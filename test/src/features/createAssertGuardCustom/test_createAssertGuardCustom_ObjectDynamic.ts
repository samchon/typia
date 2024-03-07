import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectDynamic = _test_assertGuard(
  CustomGuardError,
)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
  typia.createAssertGuard<ObjectDynamic>((p) => new CustomGuardError(p)),
);
