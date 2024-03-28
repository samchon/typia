import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assert_AtomicClass = _test_assert(TypeGuardError)(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) => typia.assert<AtomicClass>(input));
