import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertCustom_ObjectGeneric = _test_assert(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.createAssert<ObjectGeneric>((p) => new CustomGuardError(p)),
);
