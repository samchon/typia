import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_AtomicSimple = _test_isPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.isPrune(input),
    AtomicSimple.SPOILERS,
);
