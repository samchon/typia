import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assert_ObjectUnionNonPredictable = _test_assert(
  TypeGuardError,
)("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
  ObjectUnionNonPredictable,
)((input) => typia.assert<ObjectUnionNonPredictable>(input));
