import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_isPrune_AtomicAlias = _test_misc_isPrune<AtomicAlias>(
    AtomicAlias,
)(typia.misc.createIsPrune<AtomicAlias>());
