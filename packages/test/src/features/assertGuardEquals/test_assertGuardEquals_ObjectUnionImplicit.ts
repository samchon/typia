import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertGuardEquals_ObjectUnionImplicit =
  _test_assertGuardEquals("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) => typia.assertGuardEquals<ObjectUnionImplicit>(input));
