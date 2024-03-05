import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assert_ObjectAlias = _test_assert(TypeGuardError)(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) => typia.assert<ObjectAlias>(input));
