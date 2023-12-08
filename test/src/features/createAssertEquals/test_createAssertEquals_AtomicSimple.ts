import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertEquals_AtomicSimple = _test_assertEquals(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.createAssertEquals<AtomicSimple>());
