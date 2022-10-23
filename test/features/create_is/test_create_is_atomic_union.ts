import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_atomic_union = _test_is(
    "union atomic",
    AtomicUnion.generate,
    TSON.createIs<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
