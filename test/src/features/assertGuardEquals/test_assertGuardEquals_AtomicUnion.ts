import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertGuardEquals_AtomicUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) => typia.assertGuardEquals<AtomicUnion>(input));
