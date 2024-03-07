import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectHttpFormData = _test_assert(
  CustomGuardError,
)("ObjectHttpFormData")<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  typia.assert<ObjectHttpFormData>(input, (p) => new CustomGuardError(p)),
);
