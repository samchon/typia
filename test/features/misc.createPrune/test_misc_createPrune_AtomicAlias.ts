import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_prune_AtomicAlias = _test_misc_prune(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.misc.createPrune<AtomicAlias>(),
);
