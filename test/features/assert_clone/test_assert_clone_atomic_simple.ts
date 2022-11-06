import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_atomic = _test_assert_clone(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.assertClone(input),
    AtomicSimple.SPOILERS,
);
