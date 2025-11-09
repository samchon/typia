import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_createAssert_AtomicClass = (): void => _test_assert(TypeGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createAssert<AtomicClass>());
