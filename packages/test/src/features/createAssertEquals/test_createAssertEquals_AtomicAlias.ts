import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertEquals_AtomicAlias = _test_assertEquals(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.createAssertEquals<AtomicAlias>());
