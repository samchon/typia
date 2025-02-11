import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertGuardEquals_ObjectUnionExplicit =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.createAssertGuardEquals<ObjectUnionExplicit>(),
  );
