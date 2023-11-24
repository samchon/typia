import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertGuardEquals_AtomicSimple =
  _test_assertGuardEquals("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.createAssertGuardEquals<AtomicSimple>(),
  );
