import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assert_ObjectUnionExplicit = (): void =>
  _test_assert(TypeGuardError)("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.assert<ObjectUnionExplicit>(input));
