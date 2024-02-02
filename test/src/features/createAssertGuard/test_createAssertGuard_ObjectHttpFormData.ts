import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createAssertGuard_ObjectHttpFormData = _test_assertGuard(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)(
  typia.createAssertGuard<ObjectHttpFormData>(),
);
