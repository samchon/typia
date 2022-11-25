import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_AtomicUnion = _test_assertClone(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createAssertClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
