import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertGuard_ObjectUnionNonPredictable = _test_assertGuard(
  TypeGuardError,
)("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
  ObjectUnionNonPredictable,
)((input) => typia.assertGuard<ObjectUnionNonPredictable>(input));
