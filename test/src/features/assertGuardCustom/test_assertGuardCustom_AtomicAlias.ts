import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertGuardCustom_AtomicAlias = (): void =>
  _test_assertGuard(CustomGuardError)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    (input) =>
      typia.assertGuard<AtomicAlias>(input, (p) => new CustomGuardError(p)),
  );
