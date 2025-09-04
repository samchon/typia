import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertEqualsCustom_AtomicSimple = (): void =>
  _test_assertEquals(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) =>
    typia.assertEquals<AtomicSimple>(input, (p) => new CustomGuardError(p)),
  );
