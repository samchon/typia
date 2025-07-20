import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertEquals_AtomicClass = (): void =>
  _test_assertEquals(TypeGuardError)("AtomicClass")<AtomicClass>(AtomicClass)(
    typia.createAssertEquals<AtomicClass>(),
  );
