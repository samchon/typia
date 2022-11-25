import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_AtomicSimple = _test_assertClone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.assertClone(input),
    AtomicSimple.SPOILERS,
);