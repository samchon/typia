import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_AtomicUnion = _test_prune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createPrune<AtomicUnion>(),
);
