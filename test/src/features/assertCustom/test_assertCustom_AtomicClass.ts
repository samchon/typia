import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_AtomicClass = _test_assert(CustomGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.assert<AtomicClass>(input, (p) => new CustomGuardError(p)));
