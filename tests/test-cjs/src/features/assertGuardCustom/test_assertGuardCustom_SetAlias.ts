import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

export const test_assertGuardCustom_SetAlias = (): void =>
  _test_assertGuard(CustomGuardError)("SetAlias")<SetAlias>(SetAlias)((input) =>
    typia.assertGuard<SetAlias>(input, (p) => new CustomGuardError(p)),
  );
