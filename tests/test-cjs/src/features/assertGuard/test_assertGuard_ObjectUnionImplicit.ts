import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertGuard_ObjectUnionImplicit = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) => typia.assertGuard<ObjectUnionImplicit>(input));
