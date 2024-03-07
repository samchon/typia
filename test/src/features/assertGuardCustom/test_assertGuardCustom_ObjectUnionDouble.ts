import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectUnionDouble = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.assertGuard<ObjectUnionDouble>(input, (p) => new CustomGuardError(p)),
);
