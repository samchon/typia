import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssertGuardCustom_UltimateUnion = (): void =>
  _test_assertGuard(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(typia.createAssertGuard<UltimateUnion>((p) => new CustomGuardError(p)));
