import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_atomic_union = _test_is_clone(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.isClone(input),
    AtomicUnion.SPOILERS,
);
