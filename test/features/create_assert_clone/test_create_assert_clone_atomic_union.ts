import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_atomic_union = _test_assert_clone(
    "union atomic",
    AtomicUnion.generate,
    TSON.createAssertClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
