import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectJsonTag = _test_assertGuard(
  TypeGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
  typia.createAssertGuard<ObjectJsonTag>(),
);
