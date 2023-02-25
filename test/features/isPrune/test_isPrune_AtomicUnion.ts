import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_AtomicUnion = _test_isPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isPrune(input),
    AtomicUnion.SPOILERS,
);
