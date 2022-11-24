import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_atomic = _test_is_clone(
    "atomic",
    AtomicSimple.generate,
    TSON.createIsClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
