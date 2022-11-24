import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_atomic = _test_is_stringify(
    "atomic",
    AtomicSimple.generate,
    TSON.createIsStringify<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
