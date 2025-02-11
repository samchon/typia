import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertCustom_ObjectHttpArray = _test_assert(
  CustomGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
  typia.createAssert<ObjectHttpArray>((p) => new CustomGuardError(p)),
);
