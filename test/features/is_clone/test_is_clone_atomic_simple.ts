import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_atomic = _test_is_clone(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.isClone(input),
    AtomicSimple.SPOILERS,
);
