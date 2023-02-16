import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_AtomicSimple = _test_assertPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertPrune(input),
    AtomicSimple.SPOILERS,
);
