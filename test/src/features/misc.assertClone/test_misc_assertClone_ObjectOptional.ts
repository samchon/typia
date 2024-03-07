import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectOptional = _test_misc_assertClone(
  TypeGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)((input) =>
  typia.misc.assertClone<ObjectOptional>(input),
);
