import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertGuardEquals_ObjectUnionImplicit =
  _test_assertGuardEquals("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.createAssertGuardEquals<ObjectUnionImplicit>());
