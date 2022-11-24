import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_atomic = _test_clone(
    "atomic",
    AtomicSimple.generate,
    TSON.createClone<AtomicSimple>(),
);
