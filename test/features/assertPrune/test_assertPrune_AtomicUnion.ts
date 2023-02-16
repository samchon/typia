import typia from "typia";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_AtomicUnion = _test_assertPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assertPrune(input),
    AtomicUnion.SPOILERS,
);
