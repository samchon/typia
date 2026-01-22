import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertGuard_AtomicClass = (): void =>
  _test_assertGuard(TypeGuardError)("AtomicClass")<AtomicClass>(AtomicClass)(
    (input) => typia.assertGuard<AtomicClass>(input),
  );
