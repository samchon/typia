import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_AtomicAlias = _test_assertGuard(
  CustomGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)((input) =>
  typia.assertGuard<AtomicAlias>(input, (p) => new CustomGuardError(p)),
);
