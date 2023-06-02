import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertPrune_AtomicSimple = _test_assertPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertPrune<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
