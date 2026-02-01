import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_validatePrune_AtomicSimple = (): void => _test_misc_validatePrune(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.misc.validatePrune<AtomicSimple>(input));
