import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectUnionDouble = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssertGuard<ObjectUnionDouble>((p) => new CustomGuardError(p)),
);
