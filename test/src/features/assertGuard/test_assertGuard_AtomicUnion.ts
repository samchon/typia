import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertGuard_AtomicUnion = _test_assertGuard(TypeGuardError)(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) => typia.assertGuard<AtomicUnion>(input));
