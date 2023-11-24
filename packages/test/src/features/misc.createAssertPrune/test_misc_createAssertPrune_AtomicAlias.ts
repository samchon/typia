import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createAssertPrune_AtomicAlias = _test_misc_assertPrune(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.misc.createAssertPrune<AtomicAlias>());
