import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_assertClone_ObjectPartial = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) => typia.misc.assertClone<ObjectPartial>(input));
