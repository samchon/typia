import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertGuard_ObjectUnionExplicit = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.assertGuard<ObjectUnionExplicit>(input));
