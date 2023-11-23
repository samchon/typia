import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createIsPrune_AtomicClass = _test_misc_isPrune(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.misc.createIsPrune<AtomicClass>());
