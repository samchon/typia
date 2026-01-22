import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertGuardEqualsCustom_AtomicSimple = (): void =>
  _test_assertGuardEquals(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(
    typia.createAssertGuardEquals<AtomicSimple>((p) => new CustomGuardError(p)),
  );
