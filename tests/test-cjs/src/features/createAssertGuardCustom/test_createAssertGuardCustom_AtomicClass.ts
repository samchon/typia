import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertGuardCustom_AtomicClass = (): void =>
  _test_assertGuard(CustomGuardError)("AtomicClass")<AtomicClass>(AtomicClass)(
    typia.createAssertGuard<AtomicClass>((p) => new CustomGuardError(p)),
  );
