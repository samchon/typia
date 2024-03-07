import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_assertEquals_AtomicClass = _test_assertEquals(TypeGuardError)(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) => typia.assertEquals<AtomicClass>(input));
