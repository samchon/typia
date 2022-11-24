import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_atomic_union = _test_is_clone(
    "union atomic",
    AtomicUnion.generate,
    TSON.createIsClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
