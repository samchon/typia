import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_atomic_union = _test_assert(
    "union atomic",
    AtomicUnion.generate,
    TSON.createAssertType<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
