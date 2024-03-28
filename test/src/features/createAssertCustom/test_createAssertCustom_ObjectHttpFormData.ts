import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createAssertCustom_ObjectHttpFormData = _test_assert(
  CustomGuardError,
)("ObjectHttpFormData")<ObjectHttpFormData>(ObjectHttpFormData)(
  typia.createAssert<ObjectHttpFormData>((p) => new CustomGuardError(p)),
);
