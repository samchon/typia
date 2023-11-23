import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assert_ConstantEnumeration = _test_assert(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.assert<ConstantEnumeration>(input),
);
