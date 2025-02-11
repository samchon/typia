import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssert_AtomicClass = _test_assert(TypeGuardError)(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.createAssert<AtomicClass>());
