import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_atomic_simple = _test_assert_type(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.assertType(input),
    AtomicSimple.SPOILERS,
);
