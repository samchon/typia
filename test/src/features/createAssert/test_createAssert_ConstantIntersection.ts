import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssert_ConstantIntersection = _test_assert(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  typia.createAssert<ConstantIntersection>(),
);
