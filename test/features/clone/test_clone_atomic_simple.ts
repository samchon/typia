import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_atomic = _test_clone(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.clone(input),
);
