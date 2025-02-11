import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assert_DynamicSimple = _test_assert(TypeGuardError)(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) => typia.assert<DynamicSimple>(input));
