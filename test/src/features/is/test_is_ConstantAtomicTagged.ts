import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_is_ConstantAtomicTagged = _test_is(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.is<ConstantAtomicTagged>(input),
);
