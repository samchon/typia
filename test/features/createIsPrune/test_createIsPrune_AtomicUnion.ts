import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createIsPrune_AtomicUnion = _test_isPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createIsPrune<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
