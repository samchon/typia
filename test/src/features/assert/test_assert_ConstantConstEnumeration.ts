import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assert_ConstantConstEnumeration = _test_assert(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
  typia.assert<ConstantConstEnumeration>(input),
);
