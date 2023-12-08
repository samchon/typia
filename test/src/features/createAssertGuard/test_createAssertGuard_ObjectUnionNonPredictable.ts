import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertGuard_ObjectUnionNonPredictable =
  _test_assertGuard("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )(typia.createAssertGuard<ObjectUnionNonPredictable>());
