import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_isPrune_AtomicUnion = _test_isPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isPrune(input),
    AtomicUnion.SPOILERS,
);
