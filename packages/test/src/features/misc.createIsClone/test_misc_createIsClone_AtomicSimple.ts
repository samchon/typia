import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_createIsClone_AtomicSimple = _test_misc_isClone(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.misc.createIsClone<AtomicSimple>());
