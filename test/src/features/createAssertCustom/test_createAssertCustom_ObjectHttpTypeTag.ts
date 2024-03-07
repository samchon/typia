import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpTypeTag = _test_assert(
  CustomGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  typia.createAssert<ObjectHttpTypeTag>((p) => new CustomGuardError(p)),
);
