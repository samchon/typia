import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_AtomicClass = (): void => _test_assertGuard(CustomGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.assertGuard<AtomicClass>(input, (p) => new CustomGuardError(p)));
