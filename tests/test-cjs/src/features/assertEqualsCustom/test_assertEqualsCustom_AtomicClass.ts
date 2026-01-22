import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertEqualsCustom_AtomicClass = (): void =>
  _test_assertEquals(CustomGuardError)("AtomicClass")<AtomicClass>(AtomicClass)(
    (input) =>
      typia.assertEquals<AtomicClass>(input, (p) => new CustomGuardError(p)),
  );
