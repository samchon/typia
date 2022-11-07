import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_atomic_union = _test_assert_type(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.assertType(input),
    AtomicUnion.SPOILERS,
);
