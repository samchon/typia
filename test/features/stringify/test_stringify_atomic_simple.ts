import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_atomic = _test_stringify(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.stringify(input),
);
