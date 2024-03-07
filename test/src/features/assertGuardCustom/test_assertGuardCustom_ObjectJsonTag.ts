import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectJsonTag = _test_assertGuard(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.assertGuard<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
);
