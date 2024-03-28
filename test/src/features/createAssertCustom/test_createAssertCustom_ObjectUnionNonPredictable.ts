import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertCustom_ObjectUnionNonPredictable = _test_assert(
  CustomGuardError,
)("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
  ObjectUnionNonPredictable,
)(
  typia.createAssert<ObjectUnionNonPredictable>((p) => new CustomGuardError(p)),
);
