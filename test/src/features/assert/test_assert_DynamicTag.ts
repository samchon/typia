import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_assert_DynamicTag = _test_assert(TypeGuardError)(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.assert<DynamicTag>(input));
