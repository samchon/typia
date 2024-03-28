import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertEquals_AtomicClass = _test_assertEquals(TypeGuardError)(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) => typia.assertEquals<AtomicClass>(input));
