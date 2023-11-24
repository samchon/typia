import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_validateClone_AtomicClass = _test_misc_validateClone(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) =>
  typia.misc.validateClone<AtomicClass>(input),
);
