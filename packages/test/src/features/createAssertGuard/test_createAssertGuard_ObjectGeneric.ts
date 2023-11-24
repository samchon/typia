import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertGuard_ObjectGeneric = _test_assertGuard(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.createAssertGuard<ObjectGeneric>());
