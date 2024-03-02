import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_assertClone_ObjectUnionImplicit = _test_misc_assertClone(
  TypeGuardError,
)("ObjectUnionImplicit")<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.misc.assertClone<ObjectUnionImplicit>(input),
);
