import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createAssertClone_AtomicClass = _test_misc_assertClone(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.misc.createAssertClone<AtomicClass>());
