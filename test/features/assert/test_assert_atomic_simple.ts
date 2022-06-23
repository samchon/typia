import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic = _test_assert(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.assertType(input),
);
