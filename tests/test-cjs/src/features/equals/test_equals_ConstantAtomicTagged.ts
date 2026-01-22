import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_equals_ConstantAtomicTagged = (): void =>
  _test_equals("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.equals<ConstantAtomicTagged>(input));
