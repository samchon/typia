import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertGuard_AtomicAlias = (): void =>
  _test_assertGuard(TypeGuardError)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.createAssertGuard<AtomicAlias>(),
  );
