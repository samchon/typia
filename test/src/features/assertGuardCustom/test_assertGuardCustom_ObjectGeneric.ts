import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectGeneric = _test_assertGuard(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.assertGuard<ObjectGeneric>(input, (p) => new CustomGuardError(p)),
);
