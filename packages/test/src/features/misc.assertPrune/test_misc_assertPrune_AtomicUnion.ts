import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_assertPrune_AtomicUnion = _test_misc_assertPrune(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.misc.assertPrune<AtomicUnion>(input),
);
