import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectRequired = _test_misc_assertClone(
  TypeGuardError,
)("ObjectRequired")<ObjectRequired>(ObjectRequired)((input) =>
  typia.misc.assertClone<ObjectRequired>(input),
);
