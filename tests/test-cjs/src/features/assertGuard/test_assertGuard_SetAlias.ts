import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

export const test_assertGuard_SetAlias = (): void =>
  _test_assertGuard(TypeGuardError)("SetAlias")<SetAlias>(SetAlias)((input) =>
    typia.assertGuard<SetAlias>(input),
  );
