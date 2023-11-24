import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_validatePrune_AtomicUnion = _test_misc_validatePrune(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.misc.validatePrune<AtomicUnion>(input),
);
