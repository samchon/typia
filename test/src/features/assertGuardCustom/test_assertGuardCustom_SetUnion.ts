import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertGuardCustom_SetUnion = (): void =>
  _test_assertGuard(CustomGuardError)("SetUnion")<SetUnion>(SetUnion)((input) =>
    typia.assertGuard<SetUnion>(input, (p) => new CustomGuardError(p)),
  );
