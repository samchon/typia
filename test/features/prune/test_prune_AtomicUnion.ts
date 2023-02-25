import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_AtomicUnion = _test_prune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.prune(input),
);
