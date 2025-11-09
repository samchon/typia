import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_AtomicClass = (): void => _test_assertGuard(TypeGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createAssertGuard<AtomicClass>());
