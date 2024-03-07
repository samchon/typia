import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectJsonTag = _test_assert(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
  typia.createAssert<ObjectJsonTag>((p) => new CustomGuardError(p)),
);
