import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_atomic = _test_is_stringify(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.isStringify(input),
    AtomicSimple.SPOILERS,
);
