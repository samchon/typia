import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is } from "./_test_is";

export const test_is_atomic = _test_is(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.is(input),
);
