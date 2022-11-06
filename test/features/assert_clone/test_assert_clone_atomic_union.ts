import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_atomic_union = _test_assert_clone(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.assertClone(input),
    AtomicUnion.SPOILERS,
);
