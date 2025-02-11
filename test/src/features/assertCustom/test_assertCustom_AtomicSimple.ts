import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_AtomicSimple = _test_assert(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.assert<AtomicSimple>(input, (p) => new CustomGuardError(p)));
