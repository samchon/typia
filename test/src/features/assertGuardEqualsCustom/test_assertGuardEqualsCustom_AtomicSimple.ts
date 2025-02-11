import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertGuardEqualsCustom_AtomicSimple =
  _test_assertGuardEquals(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) =>
    typia.assertGuardEquals<AtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
