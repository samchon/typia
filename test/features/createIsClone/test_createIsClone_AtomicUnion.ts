import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createIsClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
