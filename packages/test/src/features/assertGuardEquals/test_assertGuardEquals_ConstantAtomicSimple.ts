import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertGuardEquals_ConstantAtomicSimple =
  _test_assertGuardEquals("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) => typia.assertGuardEquals<ConstantAtomicSimple>(input));
