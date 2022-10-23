import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic_union = _test_assert(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.assertType(input),
    AtomicUnion.SPOILERS,
);
