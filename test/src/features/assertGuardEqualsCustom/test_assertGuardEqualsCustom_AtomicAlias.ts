import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertGuardEqualsCustom_AtomicAlias = (): void =>
  _test_assertGuardEquals(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )((input) =>
    typia.assertGuardEquals<AtomicAlias>(input, (p) => new CustomGuardError(p)),
  );
