import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertCustom_DynamicConstant = (): void =>
  _test_assert(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(typia.createAssert<DynamicConstant>((p) => new CustomGuardError(p)));
