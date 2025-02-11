import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertCustom_AtomicAlias = _test_assert(CustomGuardError)(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
  typia.assert<AtomicAlias>(input, (p) => new CustomGuardError(p)),
);
