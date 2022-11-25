import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.isClone(input),
    AtomicUnion.SPOILERS,
);