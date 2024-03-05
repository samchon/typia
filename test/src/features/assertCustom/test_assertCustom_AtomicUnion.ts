import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertCustom_AtomicUnion = _test_assert(CustomGuardError)(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.assert<AtomicUnion>(input, (p) => new CustomGuardError(p)),
);
