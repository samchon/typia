import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assert_ConstantAtomicTagged = _test_assert(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.assert<ConstantAtomicTagged>(input),
);
