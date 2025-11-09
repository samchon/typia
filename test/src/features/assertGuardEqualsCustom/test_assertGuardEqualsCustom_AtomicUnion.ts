import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertGuardEqualsCustom_AtomicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) =>
    typia.assertGuardEquals<AtomicUnion>(input, (p) => new CustomGuardError(p)),
  );
