import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertCustom_ObjectHttpUndefindable = _test_assert(
  CustomGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  typia.createAssert<ObjectHttpUndefindable>((p) => new CustomGuardError(p)),
);
