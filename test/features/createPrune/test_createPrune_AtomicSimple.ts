import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_AtomicSimple = _test_prune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createPrune<AtomicSimple>(),
);
