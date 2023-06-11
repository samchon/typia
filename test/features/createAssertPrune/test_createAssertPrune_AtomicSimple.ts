import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_AtomicSimple = _test_assertPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertPrune<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
