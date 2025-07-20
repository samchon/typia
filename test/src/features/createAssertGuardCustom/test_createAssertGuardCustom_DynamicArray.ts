import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createAssertGuardCustom_DynamicArray = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )(typia.createAssertGuard<DynamicArray>((p) => new CustomGuardError(p)));
