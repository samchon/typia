import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assert_ObjectPartial = _test_assert(TypeGuardError)(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) => typia.assert<ObjectPartial>(input));
