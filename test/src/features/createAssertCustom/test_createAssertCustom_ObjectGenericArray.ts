import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectGenericArray = _test_assert(
  CustomGuardError,
)("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)(
  typia.createAssert<ObjectGenericArray>((p) => new CustomGuardError(p)),
);
