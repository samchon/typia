import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_assertClone_DynamicUnion = (): void =>
  _test_misc_assertClone(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) => typia.misc.assertClone<DynamicUnion>(input));
