import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectUnionExplicit =
  _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.misc.createAssertClone<ObjectUnionExplicit>(),
  );
