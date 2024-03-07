import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagObjectUnion = _test_assert(
  TypeGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.createAssert<TypeTagObjectUnion>(),
);
