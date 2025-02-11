import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertCustom_ObjectGenericArray = _test_assert(
  CustomGuardError,
)("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)(
  typia.createAssert<ObjectGenericArray>((p) => new CustomGuardError(p)),
);
