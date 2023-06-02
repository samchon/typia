import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertPrune_AtomicUnion = _test_assertPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assertPrune(input),
    AtomicUnion.SPOILERS,
);
