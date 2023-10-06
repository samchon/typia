import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createIsPrune_AtomicUnion = _test_misc_isPrune(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.misc.createIsPrune<AtomicUnion>());
