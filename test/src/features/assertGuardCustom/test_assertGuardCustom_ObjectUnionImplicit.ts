import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertGuardCustom_ObjectUnionImplicit = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionImplicit")<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.assertGuard<ObjectUnionImplicit>(input, (p) => new CustomGuardError(p)),
);
