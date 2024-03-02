import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertGuard_ObjectAlias = _test_assertGuard(TypeGuardError)(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) => typia.assertGuard<ObjectAlias>(input));
