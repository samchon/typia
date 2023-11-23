import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssert_TypeTagObjectUnion = _test_assert(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.createAssert<TypeTagObjectUnion>(),
);
