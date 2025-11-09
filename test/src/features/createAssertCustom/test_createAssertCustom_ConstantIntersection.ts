import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertCustom_ConstantIntersection = (): void =>
  _test_assert(CustomGuardError)("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.createAssert<ConstantIntersection>((p) => new CustomGuardError(p)));
