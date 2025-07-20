import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertGuard_AtomicSimple = (): void =>
  _test_assertGuard(TypeGuardError)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    (input) => typia.assertGuard<AtomicSimple>(input),
  );
