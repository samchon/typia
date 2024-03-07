import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagObjectUnion = _test_assertEquals(
  TypeGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.createAssertEquals<TypeTagObjectUnion>(),
);
