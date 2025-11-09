import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssert_ConstantIntersection = (): void =>
  _test_assert(TypeGuardError)("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.createAssert<ConstantIntersection>());
