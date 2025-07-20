import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuardCustom_DynamicUnion = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.createAssertGuard<DynamicUnion>((p) => new CustomGuardError(p)));
