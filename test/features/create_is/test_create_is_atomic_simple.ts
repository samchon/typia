import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is } from "./../is/_test_is";

export const test_create_is_atomic = _test_is(
    "atomic",
    AtomicSimple.generate,
    TSON.createIs<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
