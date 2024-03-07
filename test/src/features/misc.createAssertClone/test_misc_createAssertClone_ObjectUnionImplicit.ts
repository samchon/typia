import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectUnionImplicit =
  _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.misc.createAssertClone<ObjectUnionImplicit>(),
  );
