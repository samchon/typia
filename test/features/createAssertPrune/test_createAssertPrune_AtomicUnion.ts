import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertPrune_AtomicUnion = _test_assertPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertPrune<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
