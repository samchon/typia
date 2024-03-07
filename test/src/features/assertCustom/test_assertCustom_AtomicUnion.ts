import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_AtomicUnion = _test_assert(CustomGuardError)(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.assert<AtomicUnion>(input, (p) => new CustomGuardError(p)),
);
