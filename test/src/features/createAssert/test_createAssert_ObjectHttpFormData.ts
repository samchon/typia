import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createAssert_ObjectHttpFormData = _test_assert(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)(
  typia.createAssert<ObjectHttpFormData>(),
);
