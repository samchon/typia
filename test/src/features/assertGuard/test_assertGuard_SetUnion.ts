import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertGuard_SetUnion = _test_assertGuard(TypeGuardError)(
  "SetUnion",
)<SetUnion>(SetUnion)((input) => typia.assertGuard<SetUnion>(input));
