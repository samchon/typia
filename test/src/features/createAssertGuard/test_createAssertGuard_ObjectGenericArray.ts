import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertGuard_ObjectGenericArray = _test_assertGuard(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
  typia.createAssertGuard<ObjectGenericArray>(),
);
