import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectHttpFormData = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpFormData")<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  typia.assertGuard<ObjectHttpFormData>(input, (p) => new CustomGuardError(p)),
);
