import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuard_ObjectAlias = _test_assertGuard(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.createAssertGuard<ObjectAlias>());
