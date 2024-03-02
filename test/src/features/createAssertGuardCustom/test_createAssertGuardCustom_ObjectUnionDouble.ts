import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertGuardCustom_ObjectUnionDouble = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssertGuard<ObjectUnionDouble>((p) => new CustomGuardError(p)),
);
