import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_assertClone_DynamicSimple = (): void =>
  _test_misc_assertClone(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) => typia.misc.assertClone<DynamicSimple>(input));
